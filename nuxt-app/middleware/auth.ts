export default defineNuxtRouteMiddleware(async (to) => {
	if (to.path === "/auth/login") return;

	const user = useUserStore();

	// Серверная проверка токенов
	if (import.meta.server) {
		const token = useCookie("access_token");
		const refresh_token = useCookie("refresh_token");

		// Если нет обоих токенов — редирект
		if (!token.value && !refresh_token.value) {
			const next = encodeURIComponent(to.fullPath);
			return navigateTo(`/auth/login?next=${next}`, { redirectCode: 302 });
		}

		// Если нет access_token, но есть refresh_token — пытаемся обновить
		if (!token.value && refresh_token.value) {
			try {
				await $fetch("/api/refresh", {
					credentials: "include"
				});
			} catch (err) {
				console.error("Ошибка при обновлении токена:", err);
				return navigateTo("/auth/login", { redirectCode: 302 });
			}
		}
	}

	// Клиентская проверка состояния пользователя (например, после hydration)
	if (import.meta.client && !user.isLoggedIn) {
		return navigateTo("/auth/login", { redirectCode: 302 });
	}
});
