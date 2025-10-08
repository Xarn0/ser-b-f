<script setup lang="ts">
const route = useRoute();
// login.vue
const userStore = useUserStore();
const email = ref("xouli@list.ru");
const password = ref("123456");
const load: Ref<boolean> = ref(false);
onMounted(() => {
	load.value = true;
});

async function login() {
	try {
		await $fetch(`/api/login`, {
			method: "POST",
			body: { email: email.value, password: password.value },
			credentials: "include" // 💥 важно для cookie!
		});
		await userStore.fetchUser();
		navigateTo(`${route.query?.next ?? "/"}`);
	} catch (error) {}
}
const loginWithGoogle = () => {
	const clientId = "ТВОЙ_CLIENT_ID";
	const redirectUri = "http://localhost:3000/api/auth/callback";
	const scope = "openid email profile";
	const responseType = "code";

	const oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

	window.location.href = oauthUrl;
};
</script>
<template>
	<v-container v-if="load">
		<NuxtLink to="/about"> about</NuxtLink>
		<v-form
			@submit.prevent=""
			class="form pa-8 evelation-4 text-center mx-auto rounded-xl"
		>
			<v-text-field
				variant="solo-filled"
				density="compact"
				type="text"
				class="text-center"
				v-model="email"
				rounded="xl"
			/>
			<v-text-field
				variant="solo-filled"
				density="compact"
				rounded="xl"
				type="text"
				v-model="password"
			/>
			<v-btn color="primary" class="w-100 rounded-xl" @click="login"
				>send</v-btn
			>
		</v-form>
		<ui-btn-googlen-sign-i @click="loginWithGoogle" />
	</v-container>
</template>
<style>
.form {
	width: 450px;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
}
</style>
