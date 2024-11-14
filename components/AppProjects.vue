<script setup>
import { Splide, SplideTrack, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
</script>

<template>
	<section class="projects">
		<div class="container">
			<h2 class="projects__title">Реализованные проекты</h2>
			<Splide class="projects__splide"
				:has-track="false"
				:options="{
					type: 'loop',
					perPage: 3,
					perMove: 1,
					gap: 40,
					arrows: true,
					pagination: false,
					speed: 1500,
					breakpoints: {
						1699.98: {
							perPage: 2,
						},
						1399.98: {
							gap: 30,
						},
						991.98: {
							perPage: 1,
							gap: 20,
						},
						767.98: {
							arrows: false,
							pagination: true
						},
					}
				}">
				<SplideTrack>
					<SplideSlide>
						<p class="splide__slide-title">Более 10-ти лет плодотворного сотрудничества с Delivery club</p>
						<BasicTags class="splide__slide-tags" :tags="['Аутсорсинг курьеров', 'Что-то еще']" />
						<div class="splide__slide-desc">
							<p class="splide__slide-desc-p">Более 10-ти лет плодотворного сотрудничества.</p>
							<p class="splide__slide-desc-p">В 2012 году запустили службу доставки для компании.</p>
							<p class="splide__slide-desc-p">В 2018-2020 годах совместно с компанией произвели расширение рынка сбыта продукции на регионы России.</p>
						</div>
						<img class="splide__slide-image" src="/images/projects/1.png" alt="" aria-hidden="true">
					</SplideSlide>

					<SplideSlide>
						<p class="splide__slide-title">Более 10-ти лет плодотворного сотрудничества с Delivery club</p>
						<BasicTags class="splide__slide-tags" :tags="['Аутсорсинг курьеров', 'Что-то еще']" />
						<div class="splide__slide-desc">
							<p class="splide__slide-desc-p">Более 10-ти лет плодотворного сотрудничества.</p>
							<p class="splide__slide-desc-p">В 2012 году запустили службу доставки для компании.</p>
							<p class="splide__slide-desc-p">В 2018-2020 годах совместно с компанией произвели расширение рынка сбыта продукции на регионы России.</p>
						</div>
						<img class="splide__slide-image" src="/images/projects/2.png" alt="" aria-hidden="true">
					</SplideSlide>

					<SplideSlide class="splide__slide--cta">
						<p class="splide__slide-title splide__slide-title--cta">Место для вашего проекта!</p>
						<div class="splide__slide-desc splide__slide-desc--cta">
							<p class="splide__slide-desc-p">Разработаем индивидуальное решение под ваш бизнес</p>
						</div>

						<BasicTags class="splide__slide-tags"
							:tags="['Найдем сотрудников', 'Подготовим кадров', 'Минимизаируем риски', 'Проведем обучение', 'Найдем персонал за сутки', 'Что-то еще']" />
						<button class="splide__slide-button">Оставить заявку</button>
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
	</section>
</template>

<style scoped>
.projects {
	padding: 88px 0 95px;
}

.projects__title {
	font-family: var(--secondary-font-family);
	font-size: var(--section-title-fz);
	font-weight: 400;
	color: var(--font-basic);
}

.projects__splide {
	margin-top: -48px;
	padding-top: 85px;
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
	top: 0;
	right: 0;
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

.splide__track {
	--border-radius: 30px;
	border-radius: var(--border-radius);
}

.splide__slide {
	display: grid;
	grid-template-rows: auto auto 1fr auto;
	min-height: 546px;
	padding: 45px 45px 40px;
	background-color: #f5f7fa;
	border-radius: var(--border-radius);
	cursor: grab;
}

.splide__slide--cta {
	background-color: #fee02e;
}

.splide__slide-title {
	margin-bottom: 30px;
	font-size: 26px;
	font-weight: 600;
	line-height: 1.27;
	color: #1c1c1c;
}

.splide__slide-title--cta {
	margin-bottom: 20px;
	font-size: 52px;
	line-height: 1;
}

.splide__slide-tags {
	margin-bottom: 35px;
}

.splide__slide-desc {
	margin-bottom: 30px;
}

.splide__slide-desc--cta {
	max-width: 270px;
}

.splide__slide-desc-p {
	font-size: 18px;
	font-weight: 400;
	line-height: 1.55;
	color: #0c352c;
}

.splide__slide-desc-p:not(:last-child) {
	margin-bottom: 14px;
}

.splide__slide-image {
	width: 121px;
}

.splide__slide-button {
	display: flex;
	justify-content: center;
	align-items: center;
	width: fit-content;
	padding: 0.85em 2.2em;
	font-family: var(--secondary-font-family);
	font-size: 22px;
	font-weight: 400;
	color: #1c1c1c;
	background-color: #fff;
	border: none;
	border-radius: 16px;
	box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
	cursor: pointer;
}

@media (max-width: 1699.98px) {
	.splide__slide-title {
		font-size: 24px;
	}

	.splide__slide-title--cta {
		font-size: 42px;
	}
}

@media (max-width: 991.98px) {
	.splide__slide {
		min-height: 500px;
	}

	.splide__slide-title--cta {
		font-size: 38px;
	}

	.splide__slide-button {
		font-size: 20px;
	}
}

@media (max-width: 767.98px) {
	.projects__title {
		margin-bottom: 30px;
	}

	.projects__splide {
		margin-top: 0;
		padding-top: 0;
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

@media (max-width: 575.98px) {
	.splide__slide {
		min-height: auto;
		padding: 30px;
	}

	.splide__slide-title {
		margin-bottom: 20px;
		font-size: 22px;
	}

	.splide__slide-title--cta {
		font-size: 32px;
	}

	.splide__slide-tags {
		margin-bottom: 25px;
	}

	.splide__slide :deep(.tags__list) {
		--gap: 8px;
	}

	.splide__slide :deep(.tags__item) {
		font-size: 10px;
	}

	.splide__slide-desc {
		height: 200px;
		padding-right: 16px;
		overflow-y: auto;
		margin-bottom: 40px;
	}

	.splide__slide-desc--cta {
		height: auto;
		margin-bottom: 20px;
		padding: 0;
	}

	.splide__slide-desc-p {
		font-size: 16px;
	}

	.splide__slide-desc-p:not(:last-child) {
		margin-bottom: 10px;
	}

	.splide__slide-button {
		font-size: 18px;
	}
}

@media (max-width: 479.98px) {
	.splide__slide-title {
		margin-bottom: 20px;
		font-size: 20px;
	}

	.splide__slide-title--cta {
		font-size: 28px;
	}

	.splide__slide-desc {
		height: 180px;
		margin-bottom: 30px;
	}

	.splide__slide-desc--cta {
		height: auto;
		margin-bottom: 20px;
	}

	.splide__slide-desc-p {
		font-size: 14px;
	}

	.splide__slide-image {
		width: 100px;
	}

	.splide__slide-button {
		font-size: 16px;
	}
}

@media (max-width: 379.98px) {
	.splide__slide {
		padding: 25px;
	}

	.splide__slide-title {
		font-size: 18px;
	}

	.splide__slide-title--cta {
		font-size: 24px;
	}

	.splide__slide-image {
		width: 80px;
	}
}
</style>