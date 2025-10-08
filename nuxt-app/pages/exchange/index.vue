<template>
	<v-container>
		<!-- {{ data1 }} -->
		{{ user.user }}
		<UiCardExchange
			v-for="(item, key) in data1"
			:logo="item?.logo"
			:key="key"
			:countries="item?.countries"
			:title="item?.name"
			:urls="item?.urls"
			:visible="item?.weekly_visits"
		>
		</UiCardExchange>
	</v-container>
</template>
<script setup>
definePageMeta({
	middleware: ["auth"]
});
const user = useUserStore();

const data1 = ref([]);
onMounted(async () => {
	try {
		await refreshAccessToken();
		const { data } = await useFetch("/api/exchange", {
			credentials: "include"
		});
		// обрабатывай data
		return (data1.value = data.value);
	} catch (err) {
		console.error("Ошибка при загрузке данных:", err);
	}
});
async function refreshAccessToken() {
	return await $fetch("/api/refresh", {
		credentials: "include"
	});
}
</script>
