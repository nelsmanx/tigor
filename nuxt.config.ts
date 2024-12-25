import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
	devtools: { enabled: true },
	app: {
		head: {
			meta: [
				{ name: 'robots', content: 'noindex' }
			],
		}
	},
	builder: 'vite',
	vite: {
		build: {
		  modulePreload: false
		}
	},
	modules: [
		'@pinia/nuxt',
	],
	pinia: {
		storesDirs: ['./stores/**'],
	},
	compatibilityDate: '2024-04-03'
})
