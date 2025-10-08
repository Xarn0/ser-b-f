export default defineEventHandler(async () => {
	try {
		const response = await $fetch(
			`${process.env.API_WORDPRESS}/wp-json/wp/v2/posts`
		);
		return response;
	} catch (error) {}
});
