<template>
	<v-card :disabled="loading" :loading="loading" class="mx-auto my-12">
		<v-card variant="flat" v-for="(item, key) in postContent" :key="key">
			<v-card-title class="text-uppercas ma-3 font-weight-bold text-h6">
				{{ item.title.rendered }}
			</v-card-title>
			<v-card-text> <div v-html="item.content.rendered"></div></v-card-text
		></v-card>
	</v-card>
</template>
<script setup>
const reveal = ref(true);
const show = ref(true);
const loading = ref(false);
const selection = ref(1);
function reserve() {
	loading.value = true;
	setTimeout(() => (loading.value = false), 12000);
}
const messages = ref([
	{
		from: "You",
		message: `Sure, I'll see you later.`,
		time: "10:42am",
		color: "deep-purple-lighten-1"
	},
	{
		from: "John Doe",
		message: "Yeah, sure. Does 1:00pm work?",
		time: "10:37am",
		color: "green"
	},
	{
		from: "You",
		message: "Did you still want to grab lunch today?",
		time: "9:47am",
		color: "deep-purple-lighten-1"
	}
]);

const postContent = ref("");
const postTitle = ref("");
const { data } = await useFetch("/api/gecko");
onMounted(async () => {
	try {
		console.log(data); // ← посмотри в консоли структуру
		postContent.value = data?.value;
	} catch (error) {
		console.error("Ошибка при загрузке поста:", error);
	}
});
</script>
<style lang="scss" scoped>
:deep(.v-card__loader) {
	top: 50%;
}
</style>
