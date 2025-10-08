export default defineEventHandler(async (event) => {
	const token = process.env.COINMARKETCAP_API_KEY;
	const refreshToken = getCookie(event, "refresh_token");

	if (!token) {
		throw createError({
			statusCode: 500,
			statusMessage: "Missing CMC API key"
		});
	}
	type exchange = {
		data: any;
	};

	const response = await $fetch<exchange>(
		" https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest ".trim(),
		{
			headers: { "X-CMC_PRO_API_KEY": token },
			query: {
				start: 1,
				limit: 10
				// slug: "bitcoin,ethereum",

				// symbol: ""
				// aux: "urls,logo,description,date_launched,notice",
			}
		}
	);
	response.data.ref = refreshToken;
	return response.data;
});
