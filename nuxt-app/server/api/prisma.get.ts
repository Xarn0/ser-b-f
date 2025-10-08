import prisma from "~/lib/prisma";

export default defineEventHandler(async () => {
	const response = await prisma.user.findMany({
		where: { id: 3 }
	});
	return response;
});
