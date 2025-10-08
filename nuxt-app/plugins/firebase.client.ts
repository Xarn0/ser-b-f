import { defineNuxtPlugin } from "#app";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";
import type { User } from "firebase/auth";

export default defineNuxtPlugin((nuxtApp) => {
	const config = {
		apiKey: "AIzaSyC4zfCQ8DEMjJH2dZFDhk8Z1OIRpcyNi_8",
		authDomain: "test223-1f161.firebaseapp.com",
		databaseURL:
			"https://test223-1f161-default-rtdb.asia-southeast1.firebasedatabase.app",
		projectId: "test223-1f161",
		storageBucket: "test223-1f161.firebasestorage.app",
		messagingSenderId: "12745211612",
		appId: "1:12745211612:web:4925ce222ac7f664263e19",
		measurementId: "G-NR8EF2ZP7K"
	};
	const app = initializeApp(config);
	const auth = getAuth(app);

	const user = ref<User | null>(null);

	onAuthStateChanged(auth, (firebaseUser) => {
		user.value = firebaseUser;
	});
	nuxtApp.provide("auth", auth);
	nuxtApp.provide("user", user);
});
