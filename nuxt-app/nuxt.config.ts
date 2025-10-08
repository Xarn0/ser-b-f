import { defineNuxtConfig } from "nuxt/config";

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
		WOO_TOKEN: process.env.WOO_TOKEN || "",
		WOO_SECRET: process.env.WOO_SECRET || "",
		public: {
			apiBase: "http://nuxt/"
		}
	},
	modules: ["@pinia/nuxt"], // убрали @prisma/nuxt
	experimental: {
		componentIslands: true
	},
	css: ["vuetify/styles"],
	devtools: {
		enabled: true,
		timeline: { enabled: true }
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
	},
	nitro: {
		externals: {
			inline: ["@prisma/client"] // Prisma не пакуется в фронтенд
		}
	}
});
