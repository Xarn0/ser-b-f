<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
	error: Object as () => NuxtError
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
	<div>
		<button @click="handleError">Очистить ошибки Это error</button>
	</div>
</template>
