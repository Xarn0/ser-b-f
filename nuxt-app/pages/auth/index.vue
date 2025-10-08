<script setup>
// const { $auth, $user } = useNuxtApp();
// import type { Auth, User } from "firebase/auth";
// import {
// 	createUserWithEmailAndPassword,
// 	signInWithEmailAndPassword,
// 	signOut
// } from "firebase/auth";
// import { VBtn } from "vuetify/components";
// async function register(email: string, password: string) {
// 	const auth = $auth as Auth;
// 	try {
// 		signInWithEmailAndPassword(auth, email, password);
// 		console.log($user);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
// const data = $user as Ref<User | null>;

// register("xoul452i@list.ru", "1234556");
</script>
<template>
	<!-- <template v-if="data">
		<div>{{ data.providerData[0] }}</div></template
	> -->
	<NuxtLink to="/">About</NuxtLink>
	<v-btn color="success" :ripple="false">text</v-btn>
</template>
