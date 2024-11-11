import plugin from "vue-yandex-maps";
import { defineNuxtPlugin, useCookie } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
	const settings = {
		apiKey: "",
		lang: 'ru_RU',
		coordorder: "latlong",
		debug: true,
		version: "2.1",
	};

	nuxtApp.vueApp.use(plugin, settings);
});
