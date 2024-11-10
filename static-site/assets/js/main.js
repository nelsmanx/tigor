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

// CAROUSEL-PROJECTS
if (document.querySelector('#carousel-projects')) {
	const carouselProjects = new Splide('#carousel-projects', {
		type: 'loop',
		perPage: 3,
		perMove: 1,
		gap: 40,
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
	carouselProjects.mount();
}

// FAQ
const faqItems = document.querySelectorAll('.faq__item');
const faqQuestions = document.querySelectorAll('.faq__item-question');
faqQuestions.forEach(faqQuestion => {
	faqQuestion.addEventListener('click', () => {
		const targetFaqItem = faqQuestion.closest('.faq__item');
		targetFaqItem.classList.toggle('is-active');
	});
});