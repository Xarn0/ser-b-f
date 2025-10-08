<template>
	<v-btn color="warning" @click="count++" :disabled="spiner">test</v-btn>
	<v-card>
		<v-card-item v-if="!spiner">{{ test }}</v-card-item>
		<div class="spiner" v-if="spiner">loading</div>
	</v-card>
</template>
<script setup>
import { gsap } from "gsap";
const count = ref(0);
const test = ref([]);
const spiner = ref(false);

watch(
	count,
	async (newVal, oldVal) => {
		spiner.value = true;
		try {
			const response = await fetch("https://dummyjson.com/carts/2");
			if (!response.ok) throw new Error(response.status);
			let data = await response.json();

			gsap.delayedCall(1, () => {
				test.value = data.products;
				spiner.value = false;
			});
		} catch (error) {
			console.error(error.message);
		}
	},
	{ immediate: true }
);
</script>
