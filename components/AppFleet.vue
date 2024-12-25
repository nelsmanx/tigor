<script setup>
import { Splide, SplideTrack, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

// const currentCity = useCurrentCity();
</script>

<template>
	<section class="fleet section-island">
		<div class="fleet__inner">

			<BasicSectionHeader>
				<template #title>Есть свой автопарк:</template>
				<template #desc>Более 1000 автомобилей по Москве и МО<br /> Предоставление техники и еще что-то.</template>
			</BasicSectionHeader>

			<div class="fleet__body">
				<div class="container">
					<div class="fleet__body-inner">
						<div class="fleet__body-block">
							<ul class="fleet__list">
								<li class="fleet__item">
									<p class="fleet__item-title">Легковые автомобили</p>
									<p class="fleet__item-desc">Лада Гранта и Москвич 3 (более 300 авто), новые 23-24 года<br /> Местоположение: Москва и МО</p>
								</li>
								<li class="fleet__item">
									<p class="fleet__item-title">Газели NEXT</p>
									<p class="fleet__item-desc">Новые 23-24 года, все с рефрижераторами<br /> Местоположение: Москва и МО (более 50 авто)</p>
								</li>
								<li class="fleet__item">
									<p class="fleet__item-title">Бетономешалки</p>
									<p class="fleet__item-desc">Местоположение: Москва и МО (можем перевезти в другой город по согласованию)<br />
										Более 10 бетономешалок (собственных).<br /> Готовы предоставить их заводам + предоставим экипаж.</p>
								</li>
							</ul>
						</div>
						<Splide class="fleet__splide" :has-track="false" :options="{
							type: 'loop',
							perPage: 1,
							perMove: 1,
							gap: 0,
							arrows: true,
							pagination: false,
							speed: 1500,
							breakpoints: {
								575.98: {
									arrows: false,
									pagination: true
								},
							}
						}">
							<SplideTrack>
								<SplideSlide>
									<div class="splide__slide-inner">
										<img class="splide__slide-image" src="/images/fleet/1.jpg" alt="Легковой автомобиль">
									</div>
								</SplideSlide>
								<SplideSlide>
									<div class="splide__slide-inner">
										<img class="splide__slide-image" src="/images/fleet/2.jpg" alt="Легковой автомобиль">
									</div>
								</SplideSlide>
							</SplideTrack>

							<div class="splide__arrows">
								<button class="splide__arrow splide__arrow--prev">
									<svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M-6.2584e-07 7.50002C-6.37591e-07 7.76885 0.108044 8.03765 0.323663 8.24261L7.11252 14.6923C7.54438 15.1026 8.24455 15.1026 8.67624 14.6923C9.10792 14.2822 9.10792 13.6171 8.67624 13.2068L2.6691 7.50002L8.67604 1.79323C9.10772 1.38295 9.10772 0.71795 8.67604 0.307864C8.24436 -0.102621 7.54418 -0.102621 7.11232 0.307864L0.323453 6.75744C0.107785 6.9625 -6.14093e-07 7.23129 -6.2584e-07 7.50002Z" fill="#1C1C1C" />
									</svg>
								</button>
								<button class="splide__arrow splide__arrow--next">
									<svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M9 7.50002C9 7.76885 8.89196 8.03765 8.67634 8.24261L1.88748 14.6923C1.45562 15.1026 0.755447 15.1026 0.323763 14.6923C-0.107921 14.2822 -0.107921 13.6171 0.323763 13.2068L6.3309 7.50002L0.323961 1.79323C-0.107723 1.38295 -0.107724 0.71795 0.323961 0.307864C0.755645 -0.102621 1.45582 -0.102621 1.88768 0.307864L8.67655 6.75744C8.89222 6.9625 9 7.23129 9 7.50002Z" fill="#1C1C1C" />
									</svg>
								</button>
							</div>
						</Splide>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.fleet {}

.fleet__inner {
	background-color: #f5f7fa;
	border-radius: var(--section-border-radius)
}

.fleet__body {
	padding: 45px 0 50px;
}

.fleet__body-inner {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;
}

.fleet__body-block {
	padding-right: 94px;
}

.fleet__list {}

.fleet__item {
	position: relative;
	padding-left: 26px;
}

.fleet__item::before {
	content: "";
	position: absolute;
	top: 12px;
	left: 0;
	width: 8px;
	height: 8px;
	background-color: #fee02e;
	border-radius: 2px;
}

.fleet__item:not(:last-child) {
	margin-bottom: 60px;
}

.fleet__item-title {
	margin-bottom: 10px;
	font-size: 26px;
	font-weight: 600;
	color: #1c1c1c;
}

.fleet__item-desc {
	font-size: 20px;
	font-weight: 400;
	line-height: 1.55;
	color: rgba(28 28 28/ 0.7);
}

.fleet__body-carousel {}

/* carousel */
.splide {
	height: 100%;
	border-radius: 30px;
	overflow: hidden;
}

.splide__track {
	height: 100%;
}

.splide__arrow {
	opacity: 1
}

.splide__arrow svg {
	--scale: 1;
	width: calc(var(--scale) * 9px);
	height: calc(var(--scale) * 15px);
}

.splide__arrows.splide__arrows--ltr {
	position: absolute;
	z-index: 2;
	bottom: 30px;
	right: 30px;
	display: grid;
	grid-auto-flow: column;
	gap: 6px;
	padding: 7px 9px;
	background-color: #fff;
	border-radius: 100px;
}

.splide__arrows--ltr .splide__arrow--prev svg,
.splide__arrows--ltr .splide__arrow--next svg {
	transform: none
}

.splide__arrows--ltr .splide__arrow--prev,
.splide__arrows--ltr .splide__arrow--next {
	--scale: 1;
	position: static;
	width: 39px;
	height: 39px;
	background-color: #f5f7fa;
	box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
	transition: background-color 250ms ease-in-out;
	transform: none;
}

.splide__arrows--ltr .splide__arrow--prev:hover,
.splide__arrows--ltr .splide__arrow--next:hover {
	background-color: #fee02e;
}

.splide__arrows--ltr .splide__arrow--prev:focus-visible,
.splide__arrows--ltr .splide__arrow--next:focus-visible {
	outline: 2px solid #1c1c1c;
	outline-offset: 0px;
}

.splide__arrows--ltr .splide__arrow--prev:focus,
.splide__arrows--ltr .splide__arrow--next:focus {
	outline: none;
}

.splide__slide-inner {
	position: relative;
	height: 100%;
}

.splide__slide-image {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
}

@media (max-width: 1699.98px) {
	.fleet__body-block {
		padding-right: 30px;
	}

	.fleet__item:not(:last-child) {
		margin-bottom: 40px;
	}

	.fleet__item-title {
		margin-bottom: 8px;
		font-size: 24px;
	}

	.fleet__item-desc {
		font-size: 18px;
	}
}

@media (max-width: 1399.98px) {
	.fleet__body {
		padding: 40px 0 40px;
	}
}

@media (max-width: 1199.98px) {
	.fleet__body-inner {
		grid-template-columns: 100%;
	}

	.fleet__body-block {
		padding-right: 0;
	}

	.splide__slide-inner {
		height: 0;
		padding: calc(100% / (16 / 9)) 0 0;
	}
}

@media (max-width: 991.98px) {
	.fleet__body {
		padding: 30px 0;
	}

	.fleet__item {
		padding-left: 18px;
	}

	.fleet__item::before {
		top: 10px;
		width: 6px;
		height: 6px;
	}

	.fleet__item:not(:last-child) {
		margin-bottom: 30px;
	}

	.fleet__item-title {
		margin-bottom: 6px;
		font-size: 22px;
	}

	.fleet__item-desc {
		font-size: 16px;
	}
}

@media (max-width: 767.98px) {
	.fleet__item {
		padding-left: 15px;
	}

	.fleet__item-title {
		font-size: 20px;
	}

	.splide__arrows.splide__arrows--ltr {
		bottom: 20px;
		right: 20px;
	}

	.splide {
		border-radius: 20px;
	}
}

@media (max-width: 575.98px) {
	.fleet__item:not(:last-child) {
		margin-bottom: 20px;
	}

	.fleet__item::before {
		top: 8px;
	}

	.fleet__item-title {
		margin-bottom: 4px;
		font-size: 18px;
	}

	.fleet__item-desc {
		font-size: 14px;
	}

	.fleet__body {
		padding: 30px 0 20px;
	}

	.splide {
		padding-bottom: 25px;
	}

	.splide__slide {
		border-radius: var(--section-border-radius);
		overflow: hidden;
	}

	.splide :deep(.splide__pagination) {
		bottom: 0;
	}

	.splide :deep(.splide__pagination__page) {
		width: 5px;
		height: 5px;
		margin: 0;
		border-radius: 50%;
		background: #a5a5a5;
		opacity: 0.2;
	}

	.splide :deep(.splide__pagination__page.is-active) {
		background: #a5a5a5;
		transform: scale(1.5);
		opacity: 1;
	}

	.splide :deep(.splide__pagination li[role=presentation]:not(:last-child)) {
		margin-right: 8px;
	}
}

@media (max-width: 379.98px) {
	.fleet__body {
		padding: 20px 0;
	}

	.fleet__body-inner {
		gap: 20px;
	}

	.fleet__item {
		padding-left: 12px;
	}

	.fleet__item::before {
		width: 4px;
		height: 4px;
	}

	.fleet__item-title {
		margin-bottom: 2px;
		font-size: 16px;
	}

	.splide__slide-inner {
		height: 200px;
		padding: 0;
	}
}
</style>