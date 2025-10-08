import type { FetchOptions } from "ofetch";
export default defineNuxtPlugin((nuxtApp) => {
	const authFetch = $fetch.create({
		onResponseError: async (ctx) => {
			const options = ctx.options as FetchOptions & { _retry?: boolean };

			if (ctx.response.status === 401 && !options._retry) {
				try {
					await $fetch("/api/auth/refresh");
					return await $fetch(ctx.request, {
						...(ctx.options as any),
						_retry: true
					});
				} catch {
					navigateTo("/login");
				}
			}

			throw ctx.response._data;
		}
	});

	nuxtApp.provide("authFetch", authFetch);
});
