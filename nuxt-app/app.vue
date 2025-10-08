<template>
	<div>
		<v-app>
			<v-navigation-drawer :order="-1">
				<v-list>
					<!-- <v-list-item title="Navigation drawer"> {{ widthInner }}</v-list-item>	 -->
				</v-list>
			</v-navigation-drawer>
			<v-navigation-drawer location="right" :order="-2">
				<v-list>
					<v-list-item title="Navigation drawer"></v-list-item>
				</v-list> </v-navigation-drawer
			><v-app-bar title="App bar " :order="-1"
				><v-spacer></v-spacer>
				<v-toolbar-title v-if="userStore.user" class="text-right pe-5"
					>{{ userStore.user.email }}
				</v-toolbar-title>
				<v-btn @click="logout" v-if="userStore.isLoggedIn"> Выйти</v-btn>
				<ClientOnly>
					<v-btn to="/auth/login" exact v-if="!userStore.isLoggedIn"
						>Вход</v-btn
					>
				</ClientOnly>
			</v-app-bar>
			<v-main>
				<v-container>
					<v-icon icon="fs-home" />
					<NuxtPage></NuxtPage>
				</v-container>
			</v-main>
			<v-footer color="surface-light bg-custom-color2" name="footer">
				<v-btn class="mx-auto" text="Get data" variant="text"></v-btn>
			</v-footer>
		</v-app>
	</div>
</template>
<script setup lang="ts">
import { useDisplay, useHotkey } from "vuetify";
import { useUserStore } from "~/stores/index";
const userStore = useUserStore();
async function logout() {
	await userStore.logout();
}
// // const userStore = useUserStore();
// const widthInner = ref(0);
// import { useLocale } from "vuetify";
// // const user = ref(null) as any;
// const { current } = useLocale();

onMounted(async () => {
	await userStore.fetchUser();
	await $fetch("/api/refresh", {
		credentials: "include"
	});
	// const { width, mobile, thresholds } = useDisplay();
	// console.log(current.value);

	// 	useHotkey(
	// 		"ctrl+shift",
	// 		() => {
	// 			console.log("Save action");
	// 		},
	// 		{
	// 			preventDefault: true
	// 		}
	// 	);
	// 	useHotkey(
	// 		"f12",
	// 		() => {
	// 			console.log("Save action");
	// 		},
	// 		{
	// 			preventDefault: true
	// 		}
	// 	);
	// 	console.log(width.value); // 960
	// 	console.log(thresholds.value.lg); // true
	// 	watchEffect(() => {
	// 		if (width.value) {
	// 			widthInner.value = width.value;
	// 		}
	// 	});
});

const load: Ref<boolean> = ref(false);
useHead({
	titleTemplate: (title) =>
		title ? `${title} – Заголовок сайта	` : "Заголовок сайта"
});

onUnmounted(() => {
	load.value = false;
});
</script>
<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
</style>
