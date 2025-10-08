<template>
	<v-container v-if="load">
		<!-- <p>{{ gl + 9 }}</p> -->
		<product-card></product-card>
		<v-btn color="success" to="about">about</v-btn>
		vmn
		<p>{{ $user }}</p>
		<!-- <product-card></product-card>
		<product-card></product-card> -->
		<!-- <test-wath></test-wath> -->
		<!-- <test-chat></test-chat> -->
		<!-- <TestGhat></TestGhat> --></v-container
	>
</template>

<style>
.home {
	display: flex;
	border: 1px solid #394;
	cursor: pointer;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
	gap: 10px;
	padding: 10px;
	height: 2000px;
}
</style>
<script setup lang="ts">
const load: Ref<boolean> = ref(false);
onMounted(() => {
	load.value = true;
});
const { $user } = useNuxtApp();
const count = useState<number>("counter", () => 0);
console.log(count.value);
</script>
