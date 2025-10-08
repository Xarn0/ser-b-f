export default defineEventHandler(async (event) => {
	// Удаляем access_token
	setCookie(event, "access_token", "", {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		path: "/",
		maxAge: 0,
		sameSite: "strict"
	});

	// Удаляем refresh_token
	setCookie(event, "refresh_token", "", {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		path: "/",
		maxAge: 0,
		sameSite: "strict"
	});

	return { success: true, message: "Logged out successfully" };
});
