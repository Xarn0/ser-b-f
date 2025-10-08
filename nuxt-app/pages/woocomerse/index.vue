<script setup lang="ts">
const { data } = useFetch("/api/Woocomerse");
</script>

<template>
	<v-container>
		{{ data }}
	</v-container>
</template>

<style lang="scss"></style>
