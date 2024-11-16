export const useColorScheme = () => {
	const colorScheme = useCookie('color-scheme');

	if (process.server && colorScheme.value) {
		useHead({
			htmlAttrs: {
				'data-color-scheme': colorScheme.value
			}
		});
	}

	if (!colorScheme.value && process.client) {
		const isPrefersColorSchemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		colorScheme.value = isPrefersColorSchemeDark ? 'dark' : 'light';

		useHead({
			htmlAttrs: {
				'data-color-scheme': colorScheme.value
			}
		});
	}

	watch(colorScheme, (newValue) => {
		useHead({
			htmlAttrs: {
				'data-color-scheme': newValue
			}
		});
	}, { immediate: true });

	const toggleColorScheme = () => {
		colorScheme.value = colorScheme.value === 'dark' ? 'light' : 'dark';
	};

	return {
		colorScheme,
		toggleColorScheme
	};
};