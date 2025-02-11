import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
	devtools: { enabled: true },
	app: {
		head: {
			meta: [
				{ name: 'robots', content: 'noindex' }
			],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "57x57",
          type: "image/png",
          href: "/favicons/apple-touch-icon-57x57.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "60x60",
          type: "image/png",
          href: "/favicons/apple-touch-icon-60x60.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "72x72",
          type: "image/png",
          href: "/favicons/apple-touch-icon-72x72.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "76x76",
          type: "image/png",
          href: "/favicons/apple-touch-icon-76x76.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "114x114",
          type: "image/png",
          href: "/favicons/apple-touch-icon-114x114.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "120x120",
          type: "image/png",
          href: "/favicons/apple-touch-icon-120x120.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "144x144",
          type: "image/png",
          href: "/favicons/apple-touch-icon-144x144.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "152x152",
          type: "image/png",
          href: "/favicons/apple-touch-icon-152x152.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          type: "image/png",
          href: "/favicons/apple-touch-icon-180x180.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/favicons/android-icon-192x192.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicons/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/favicons/favicon-96x96.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicons/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: 'image/x-icon',
          href: "/favicon.ico"
        },
      ]
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
