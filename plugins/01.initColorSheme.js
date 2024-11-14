// if (import.meta.client) return;

// export default defineNuxtPlugin({
// 	hooks: {
// 		'app:mounted'() {
// 			const nuxtApp = useNuxtApp();
// 			// Инициализация аналитики
// 			const savedColorScheme = localStorage.getItem('vueuse-color-scheme');
// 			const isPrefersColorSchemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// 			if (savedColorScheme === 'dark' || (savedColorScheme === 'auto' && isPrefersColorSchemeDark)) {
// 				document.documentElement.dataset.colorMode = "dark";
// 			}
// 		}
// 	}
// });