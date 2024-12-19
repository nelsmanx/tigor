export const useCurrentCity = () => {
	const defaultCity = 'Москва и МО';

	const currentCity = useCookie('current-city', {
		path: '/',
		expires: new Date(Date.now() + 365 * 86400e3),
	});

	if (!currentCity.value && import.meta.client) {
		getCurrentCity();
	}

	async function getCurrentCity() {
		if (!navigator.geolocation) return;

		try {
			const position = await new Promise((resolve, reject) => {
				navigator.geolocation.getCurrentPosition(resolve, reject);
			});

			const { longitude, latitude } = position.coords;
			// const longitude = ;
			// const latitude = ;

			const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=ru`);

			if (!response.ok) {
				console.error('Error reverse geocoding:', error);
				currentCity.value = defaultCity;
			}

			const data = await response.json();
			с;
			currentCity.value = data.address?.city ||
				data.address?.state ||
				defaultCity;

			console.log(data);

		} catch (error) {
			console.error('Error reverse geocoding:', error);
			currentCity.value = defaultCity;
		};
	};

	return currentCity;
};