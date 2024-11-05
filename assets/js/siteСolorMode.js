switch (localStorage.getItem('color-mode')) {
	case 'light':
		document.documentElement.dataset.colorMode = "light";
		break;

	case 'dark':
		document.documentElement.dataset.colorMode = "dark";
		break;

	default:
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setDarkMode();
		} else {
			setLightMode();
		}
		break;
}

document.addEventListener("DOMContentLoaded", () => {
	const modeToggler = document.querySelector('.mode-toggler');

	modeToggler.addEventListener('click', () => {
		if (localStorage.getItem('color-mode') === 'dark') {
			setLightMode();
		} else {
			setDarkMode();
		}
	});
});

function setLightMode() {
	document.documentElement.dataset.colorMode = "light";
	localStorage.setItem('color-mode', 'light');
}

function setDarkMode() {
	document.documentElement.dataset.colorMode = "dark";
	localStorage.setItem('color-mode', 'dark');
}