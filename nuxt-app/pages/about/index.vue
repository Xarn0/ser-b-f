<template>
	<v-container v-if="isClient && data" class="d-flex flex-wrap">
		<v-card
			v-for="(item, key) in data.data"
			class=""
			flat
			:loading="pending"
			:key="key"
		>
			<v-card-text>
				<CardCrypt
					:price="item?.currency?.price_usd"
					:name="item?.currency?.symbol"
					:balans="item?.balance"
				/>
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script setup>
definePageMeta({ middleware: "auth" });
import CardCrypt from "~/components/ui/CardCrypt.vue";

const isClient = ref(false);
onMounted(() => {
	container__inner;
	isClient.value = true;
});

const { data, pending, refresh } = useFetch("/api/foo");
</script>
