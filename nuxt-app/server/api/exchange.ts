export default defineEventHandler(async (event) => {
	const token = process.env.COINMARKETCAP_API_KEY;
	const refreshToken = getCookie(event, "refresh_token");
	const accessToken = getCookie(event, "access_token");
	if (!accessToken) throw createError({ status: 401, message: "access not" });
	console.log(accessToken);
	console.log(refreshToken);

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
		"https://pro-api.coinmarketcap.com/v1/exchange/info",
		{
			headers: { "X-CMC_PRO_API_KEY": token },
			query: {
				// id: "270,290",
				slug: "bybit,binance,coinex,bitget,gate,mexc,upbit,weex,kraken",
				aux: "urls,logo,description,date_launched,notice"
			}
		}
	);
	return response.data;
});
