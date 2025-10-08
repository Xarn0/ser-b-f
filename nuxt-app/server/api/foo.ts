export default defineEventHandler(async () => {
	const token = process.env.COINMARKETCAP_API_KEY;

	if (!token) {
		throw createError({
			statusCode: 500,
			statusMessage: "Missing CMC API key"
		});
	} // лучше из .env
	type coinmarketcap = {
		data: {
			data: any;
			status: any;
		};
	};
	// пример: все ассеты биржи Binance (id = 270)
	const response = await $fetch<coinmarketcap>(
		"https://pro-api.coinmarketcap.com/v1/exchange/assets",
		{
			headers: { "X-CMC_PRO_API_KEY": token },
			query: { id: 270 } // ← или slug: 'binance'
		}
	);

	return { data: response?.data };
});
