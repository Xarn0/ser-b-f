export default defineEventHandler(async () => {
	try {
		const config = useRuntimeConfig();
		const auth = btoa(`${config.WOO_TOKEN}:${config.WOO_SECRET}`);
		const response = await $fetch("http://wordpress/wp-json/", {
			headers: {
				Authorization: `Basic ${auth} `
			}
		});
		return response;
	} catch (error) {
		console.log(error);
	}
});
