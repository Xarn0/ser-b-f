import "@mdi/font/css/materialdesignicons.css";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import colors from "vuetify/util/colors";
// import "@/assets/sass/variables.scss";
// const components = {
// 	VBtn,
// 	VAppBar,
// 	VApp,
// 	VNavigationDrawer,
// 	VMain,
// 	VAppBarTitle,
// 	VList,
// 	VListItem,
// 	VContainer,
// 	VLayout,
// 	VResponsive,
// 	VCard,
// 	VCardItem,
// 	VCardTitle,
// 	VImg
// };
export default defineNuxtPlugin((nuxtApp) => {
	const vuetify = createVuetify({
		aliases: {
			Mybtn: components.VBtn
		},

		defaults: {
			VCard: {
				Mybtn: {
					color: "#939"
				}
			}
		},
		ssr: true,
		components,
		directives,

		theme: {
			defaultTheme: "myCustomTheme",
			themes: {
				myCustomTheme: {
					colors: {
						"myColor": "#900508",
						"custom-color2": colors.pink.lighten4,
						"custom-success": colors.green.accent3,
						"custom-deepPurple": colors.deepPurple.accent4
					}
				}
			}
		}
	});

	nuxtApp.vueApp.use(vuetify);
});
