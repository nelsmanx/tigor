const savedColorScheme = localStorage.getItem('vueuse-color-scheme');
const isPrefersColorSchemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedColorScheme === 'dark' || (savedColorScheme === 'auto' && isPrefersColorSchemeDark)) {
	document.documentElement.dataset.colorMode = "dark";
}