<template>
	<v-card>
		<v-card-title class="text-weight">
			<p>{{ props.title }}</p>
			<v-img :src="props.logo" width="90"></v-img>
		</v-card-title>
		<v-card-item>
			<v-list v-for="(list, key) in urls">
				<v-list-item :key="key" class="text-blue">
					{{ list }}
				</v-list-item>
			</v-list>
		</v-card-item>
		<v-card-item>
			<p>Количество посещений в неделю: {{ props.visible }}</p>
			<p>Страны:{{ props.countries }}</p>
		</v-card-item>
	</v-card>
</template>
<script setup lang="ts">
interface EchangeType {
	title: string;
	visible: number;
	urls: any;
	logo: string;
	countries: any;
}

const props = defineProps<EchangeType>();
</script>
