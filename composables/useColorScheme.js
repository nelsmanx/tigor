export const useColorScheme = () => {
	const colorScheme = useCookie('color-scheme', {
		path: '/',
		expires: new Date(Date.now() + 365 * 86400e3),
	});

	if (import.meta.server && colorScheme.value) {
		setColorScheme(colorScheme.value);
	}

	if (!colorScheme.value && import.meta.client) {
		const isPrefersColorSchemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		colorScheme.value = isPrefersColorSchemeDark ? 'dark' : 'light';
		setColorScheme(colorScheme.value);
	}

	watch(colorScheme, (newValue) => {
		setColorScheme(newValue);
	}, { immediate: true });

	function setColorScheme(newColorScheme) {
		useHead({
			htmlAttrs: {
				'data-color-scheme': newColorScheme
			}
		});
	};

	function toggleColorScheme() {
		colorScheme.value = colorScheme.value === 'dark' ? 'light' : 'dark';
	};

	return {
		colorScheme,
		toggleColorScheme
	};
};