import prisma from "~/lib/prisma";
import jwt from "jsonwebtoken";

const { verify } = jwt;
export default defineEventHandler(async (event) => {
	const token = getCookie(event, "access_token");
	if (!token) throw createError({ status: 401, message: "access not" });

	try {
		const decoded = verify(token, process.env.ACCESS_SECRET!) as any;
		const user = await prisma.user.findUnique({
			where: {
				id: decoded.id
			}
		});
		if (!user)
			throw createError({ status: 404, message: "такого юззера нету" });
		return { ...user, password: null };
	} catch (error) {}
});
