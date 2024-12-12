// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	app: {
		head: {
			meta: [
				{ name: 'robots', content: 'noindex' }
			],
		}
	},
	compatibilityDate: '2024-04-03',
})
