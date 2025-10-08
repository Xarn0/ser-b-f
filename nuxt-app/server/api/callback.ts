export default defineEventHandler(async (event) => {
	const query = getQuery(event);
	const code = query.code as string;

	if (!code) {
		return sendRedirect(event, "/", 302);
	}

	const clientId = "ТВОЙ_CLIENT_ID";
	const clientSecret = "ТВОЙ_CLIENT_SECRET";
	const redirectUri = "http://localhost:3000/api/auth/callback";

	const tokenRes = await $fetch("https://oauth2.googleapis.com/token", {
		method: "POST",
		body: new URLSearchParams({
			code,
			client_id: clientId,
			client_secret: clientSecret,
			redirect_uri: redirectUri,
			grant_type: "authorization_code"
		}),
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		}
	});

	const { access_token, id_token } = tokenRes as any;

	const profile = await $fetch(
		"https://www.googleapis.com/oauth2/v3/userinfo",
		{
			headers: {
				Authorization: `Bearer ${access_token}`
			}
		}
	);

	// ✅ Сохраняешь профиль в сессию/куку или токен в localStorage (по выбору)
	// Ниже пример установки куки с JWT или id_token

	setCookie(event, "id_token", id_token, {
		httpOnly: true,
		sameSite: true,
		maxAge: 60 * 60 * 24
	});

	return sendRedirect(event, "/", 302);
});
