<template>
	<div>
		<select v-model="category">
			<option value="carts">Корзины</option>
			<option value="products">Продукты</option>
		</select>

		<input type="number" v-model="page" min="1" />
		<button @click="page++">Следующая страница</button>

		<div v-if="loading">Загрузка...</div>
		<pre v-else>{{ data }}</pre>
	</div>
</template>

<script setup>
import { ref, watch } from "vue";

const category = ref("carts");
const page = ref(1);
const data = ref(null);
const loading = ref(false);

watch(
	[category, page],
	async ([newCategory, newPage], [oldCategory, oldPage]) => {
		loading.value = true;
		try {
			const res = await fetch(
				`https://dummyjson.com/${newCategory}/${newPage}`
			);
			const json = await res.json();
			data.value = json;
		} catch (err) {
			console.error(err);
		} finally {
			loading.value = false;
		}
	},
	{ immediate: true }
);
</script>
