// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	app: {
		head: {
			script: [
				{ src: '/initColorScheme.js' }
			],
		}
	},

	css: [
		'bootstrap/dist/css/bootstrap.min.css',
		'~/assets/css/basic.css',
		'~/assets/css/fonts.css',
	],
	modules: ['@pinia/nuxt'],
	compatibilityDate: '2024-04-03',
})
