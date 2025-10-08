import { defineStore } from "pinia";

export const useUserStore = defineStore("use", () => {
	const user = ref(null) as any;
	const isLoggedIn = computed(() => !!user.value);

	async function fetchUser() {
		try {
			const response = await $fetch("/api/profile", {
				credentials: "include"
			});
			user.value = response;
			console.log("Юзер получен:", response);
		} catch (error) {
			console.error("Ошибка при получении профиля:", error);
			user.value = null;
		}
	}
	async function logout() {
		try {
			const response = await $fetch("/api/logout", {
				method: "POST",
				credentials: "include"
			});
			user.value = null;

			navigateTo("/auth/login/");
			return response;
		} catch (err) {
			console.error("Ошибка при выходе:", err);
		}
	}

	return {
		user,
		isLoggedIn,
		fetchUser,
		logout
	};
});
