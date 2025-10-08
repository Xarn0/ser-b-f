import jwt from "jsonwebtoken";

const { sign, verify } = jwt;

export default defineEventHandler(async (event) => {
	const refreshToken = getCookie(event, "refresh_token");
	console.log(" token " + refreshToken);

	if (!refreshToken) {
		throw createError({ statusCode: 401, statusMessage: "No refresh token" });
	}

	try {
		const decoded = verify(refreshToken, process.env.REFRESH_SECRET!) as any;

		const newAccessToken = sign(
			{ id: decoded.id },
			process.env.ACCESS_SECRET!,
			{ expiresIn: "1m" }
		);

		setCookie(event, "access_token", newAccessToken, {
			httpOnly: true,
			maxAge: 60 * 1,
			path: "/",
			secure: true,
			sameSite: "strict"
		});

		return { success: true };
	} catch (err) {
		throw createError({
			statusCode: 401,
			statusMessage: "Invalid refresh token"
		});
	}
});
