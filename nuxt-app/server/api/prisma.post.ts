import prisma from "~/lib/prisma";
import { genSalt, hash } from "bcrypt";

export default defineEventHandler(async (event) => {
	const data = await readBody(event);

	const salt = await genSalt(10);
	const generatePassword = await hash(data.password, salt);

	if (!data)
		throw createError({ status: 400, message: "Ничего не отправилось" });
	const proverka = await prisma.user.findUnique({
		where: {
			email: data.email
		}
	});
	if (proverka)
		throw createError({ status: 400, message: "Такая почта уже есть в базе" });
	return await prisma.user.create({
		data: {
			email: data.email,
			password: `${generatePassword}`,
			name: data.name
		}
	});
});
