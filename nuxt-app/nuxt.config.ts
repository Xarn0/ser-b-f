// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	compatibilityDate: "2025-05-15",
	ssr: true,
	pinia: {
		storesDirs: ["./stores/**"]
	},
	app: {
		pageTransition: { name: "page", mode: "out-in" }
	},
	runtimeConfig: {
		WOO_TOKEN: "ck_8aa0d73a4771f95af2847d3357f8b53cc6cf749e", // будет доступно только на сервере
		WOO_SECRET: "cs_4ee3b9424cab2f03b43808d3d82cf3fd162ddd6d",

		public: {
			apiBase: "http://nuxt/"
		} // public-переменные, если нужно с клиента
	},
	modules: ["@prisma/nuxt", "@pinia/nuxt"],
	// auth: {
	// 	origin: "http://localhost:3000",
	// 	enableGlobalAppMiddleware: true
	// },
	experimental: {
		componentIslands: true
	},
	prisma: { autoSetupPrisma: true },
	css: ["vuetify/styles"],
	devtools: {
		enabled: true,

		timeline: {
			enabled: true
		}
	},

	build: {
		transpile: ["vuetify"]
	},

	vite: {
		vue: {
			template: {
				transformAssetUrls: {
					base: null,
					includeAbsolute: false
				}
			}
		}
	}
});
