<template>
	<div>
		{{ prismadata }}
		<!-- <p>{{ data }}</p> -->
		<v-row>
			<v-col v-for="(item, key) in data" cols="4" :key="key">
				<v-card
					:key="key"
					:prepend-avatar="item.images?.x60"
					class="ma-2 h-100 d-flex flex-column justify-space-between"
					:title="item.name + `#${item.rank}`"
					:subtitle="item.symbol"
					><v-card-item>
						<v-row no-gutters>
							<v-col cols="6">
								<client-only>
									<v-progress-circular
										v-if="
											calculateSupplyPercent(
												item.circulatingSupply,
												item.maxSupply
											) !== 0
										"
										:model-value="
											calculateSupplyPercent(
												item.circulatingSupply,
												item.maxSupply
											)
										"
										:size="120"
										:width="8"
										color="primary"
									>
										{{
											calculateSupplyPercent(
												item.circulatingSupply,
												item.maxSupply
											)
										}}
										%
									</v-progress-circular>
								</client-only>
								<client-only>
									<v-progress-circular
										v-if="item.maxSupply === null"
										:size="100"
										:width="8"
										:model-value="100"
										color="success"
									>
										<v-icon icon="mdi-infinity"></v-icon>
									</v-progress-circular>
								</client-only>
							</v-col>
							<v-col cols="6">
								<v-card
									density="compact"
									size="x-small"
									elevation="12"
									class="mr-3"
								>
									<v-card-item>
										<v-card-title>В расходе</v-card-title>
										<v-card-subtitle class="text-center">{{
											item.circulatingSupply
										}}</v-card-subtitle>
									</v-card-item>
								</v-card>
							</v-col>
						</v-row>
						<!-- максимум за время
						{{ item.ath.value }} минимум за время {{ item.atl.value }} монет в
						текущая -->
					</v-card-item>

					<v-card-actions class="d-flex flex-column">
						<v-menu :close-on-content-click="false">
							<template #activator="{ props }">
								<v-btn :="props">{{ opentext(props["aria-expanded"]) }}</v-btn>
							</template>

							<v-btn class="w-100 bg-primary font-weight-bold my-3">buy</v-btn>
							<v-btn class="w-100 bg-custom-success font-weight-bold"
								>sell</v-btn
							></v-menu
						>
					</v-card-actions>
				</v-card>
			</v-col></v-row
		>
		<v-container>
			<TestModel
				v-model:title="bookTitle"
				v-model:subtitle="subtitle"
			></TestModel>
			<v-divider class="ma-3" color="#484" thickness="40"></v-divider>
			<TestModel
				v-model:title="bookTitle"
				v-model:subtitle="subtitle"
			></TestModel>
			<TestModel
				v-model:title="bookTitle"
				v-model:subtitle="subtitle"
			></TestModel>
			<TestModel
				v-model:title="bookTitle"
				v-model:subtitle="subtitle"
			></TestModel>
		</v-container>
	</div>
</template>
<script setup lang="ts">
const test = ref(12);
const bookTitle = ref("hi");
const subtitle = ref("sub");
const { data: prismadata } = useFetch("/api/prisma");
const { data } = useFetch("/api/coin");
function calculateSupplyPercent(circulating: number, max: number): number {
	if (!max || !isFinite(max) || max === 0) return 0;

	const percent = (circulating / max) * 100;

	return percent > 100 ? 100 : Math.round(percent * 100) / 100; // округление до 2 знаков
}
const opentext = (el: unknown) => {
	return el === "false" ? "open" : "close";
};
</script>
