// CAROUSEL-HERO
if (document.querySelector('#carousel-hero')) {
	const carouselHero = new Splide('#carousel-hero', {
		type: 'loop',
		perPage: 1,
		perMove: 1,
		gap: 0,
		arrows: true,
		pagination: false,
		autoplay: false,
		interval: 4500,
		speed: 1500,

		breakpoints: {
			1199.98: {

			},
		},
	});

	carouselHero.mount();
}

// CAROUSEL-FLEET
if (document.querySelector('#carousel-fleet')) {
	const carouselFleet = new Splide('#carousel-fleet', {
		type: 'loop',
		perPage: 1,
		perMove: 1,
		gap: 0,
		arrows: true,
		pagination: false,
		autoplay: false,
		interval: 4500,
		speed: 1500,

		breakpoints: {
			1199.98: {

			},
		},
	});
	carouselFleet.mount();
}