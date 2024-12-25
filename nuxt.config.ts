export default defineNuxtConfig({
	devtools: { enabled: true },
	app: {
		head: {
			meta: [
				{ name: 'robots', content: 'noindex' }
			],
		}
	}
})
