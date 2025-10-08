export default defineEventHandler(async () => {
	interface coin {
		data: any;
	}
	try {
		const response = await $fetch<coin>(
			"https://api.cryptorank.io/v2/currencies",
			{
				headers: {
					"X-Api-Key":
						"313c9363865670d48992592a5843d9e6713c627056b726d1f6d87bbfb4b4"
				}
			}
		);
		return response.data;
	} catch (error) {
		console.log(error);
	}
});
