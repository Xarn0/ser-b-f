import { setCookie } from "h3";
import jwt from "jsonwebtoken";
import prisma from "~/lib/prisma";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const { email, password } = body;

	if (!email || !password) {
		throw createError({ status: 400, message: "Email и пароль обязательны" });
	}

	const user = await prisma.user.findUnique({ where: { email } });

	if (!user || !user.password) {
		throw createError({ status: 401, message: "Неверные учетные данные" });
	}

	const isMatch = await bcrypt.compare(password, user.password);
	if (!isMatch) {
		throw createError({ status: 401, message: "Неверные учетные данные" });
	}

	if (!process.env.ACCESS_SECRET || !process.env.REFRESH_SECRET) {
		throw createError({ status: 500, message: "JWT secret не определён" });
	}

	const accessToken = jwt.sign(
		{ id: user.id, email },
		process.env.ACCESS_SECRET,
		{ expiresIn: "1m" }
	);
	const refreshToken = jwt.sign({ id: user.id }, process.env.REFRESH_SECRET, {
		expiresIn: "7d"
	});

	const isProd = process.env.NODE_ENV === "production";

	setCookie(event, "access_token", accessToken, {
		httpOnly: true,
		maxAge: 60,
		path: "/",
		secure: isProd,
		sameSite: "strict"
	});

	setCookie(event, "refresh_token", refreshToken, {
		httpOnly: true,
		maxAge: 60 * 60 * 24 * 7,
		path: "/",
		secure: isProd,
		sameSite: "strict"
	});

	return {
		message: "Успешный вход",
		user: { id: user.id, email: user.email }
	};
});
