<script setup>
import { Splide, SplideTrack, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
const { $emitter } = useNuxtApp();

</script>

<template>
	<section class="hero">
		<div class="container container--full-width">
			<div class="hero__inner">
				<Splide class="hero__splide"
					:has-track="false"
					:options="{
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
								<div class="splide__slide-block-1">
									<BasicTags :tags="['Аутсорсинг курьеров', 'Поиск работы']" class="splide__slide-tags" />
									<h1 class="splide__slide-title">ТВОЯ КАРЬЕРА НАЧИНАЕТСЯ ЗДЕСЬ!</h1>
									<p class="splide__slide-desc">Компания оказывает услуги по аутсорсингу курьеров в Москве и Московской области. Наши курьеры оперативно доставят негабаритные грузы, продукцию или документы.</p>
									<div class="splide__slide-block-1-group">
										<button class="splide__slide-button button-basic" @click="$emitter.emit('showModalCallbackVacancy', 1)">
											Оставить заявку
										</button>
										<p class="splide__slide-block-1-group-desc">Все виды услуг по&nbsp;аутсорсу в&nbsp;любом регионе&nbsp;России</p>
									</div>
								</div>
								<div class="splide__slide-block-2 splide__slide-block-2--slide-1 ">
									<div class="splide__slide-info">
										<p class="splide__slide-info-title">Предоставляем автокурьеров</p>

										<BasicBadges>
											<BasicBadgesItem>
												<template #title>>10 лет</template>
												<template #desc>Минимальный стаж вождения</template>
											</BasicBadgesItem>
											<BasicBadgesItem>
												<template #title>от 25 лет</template>
												<template #desc>Возраст всех наших водителей</template>
											</BasicBadgesItem>
										</BasicBadges>

									</div>
								</div>
							</div>
						</SplideSlide>

						<SplideSlide>
							<div class="splide__slide-inner">
								<div class="splide__slide-block-1">

									<BasicTags :tags="['Аутсорсинг курьеров', 'Поиск работы']" class="splide__slide-tags" />

									<h1 class="splide__slide-title">ТВОЯ КАРЬЕРА НАЧИНАЕТСЯ ЗДЕСЬ!</h1>
									<p class="splide__slide-desc">Компания оказывает услуги по аутсорсингу курьеров в Москве и Московской области. Наши курьеры оперативно доставят негабаритные грузы, продукцию или документы.</p>
									<div class="splide__slide-block-1-group">
										<button class="splide__slide-button button-basic" @click="$emitter.emit('showModalCallbackVacancy', 2)">
											Оставить заявку
										</button>
										<p class="splide__slide-block-1-group-desc">Все виды услуг по&nbsp;аутсорсу в&nbsp;любом регионе&nbsp;России</p>
									</div>
								</div>
								<div class="splide__slide-block-2 splide__slide-block-2--slide-2 ">
									<div class="splide__slide-info">
										<p class="splide__slide-info-title">Аутсорсинг пеших&nbsp;курьеров</p>

										<BasicBadges>
											<BasicBadgesItem>
												<template #title>>10 лет</template>
												<template #desc>Минимальный стаж вождения</template>
											</BasicBadgesItem>
											<BasicBadgesItem>
												<template #title>от 25 лет</template>
												<template #desc>Возраст всех наших водителей</template>
											</BasicBadgesItem>
										</BasicBadges>

									</div>
								</div>
							</div>
						</SplideSlide>
						<SplideSlide>
							<div class="splide__slide-inner">
								<div class="splide__slide-block-1">

									<BasicTags :tags="['Аутсорсинг курьеров', 'Поиск работы']" class="splide__slide-tags" />

									<h1 class="splide__slide-title">ТВОЯ КАРЬЕРА НАЧИНАЕТСЯ ЗДЕСЬ!</h1>
									<p class="splide__slide-desc">Компания оказывает услуги по аутсорсингу курьеров в Москве и Московской области. Наши курьеры оперативно доставят негабаритные грузы, продукцию или документы.</p>
									<div class="splide__slide-block-1-group">
										<button class="splide__slide-button button-basic" @click="$emitter.emit('showModalCallbackVacancy', 3)">
											Оставить заявку
										</button>
										<p class="splide__slide-block-1-group-desc">Все виды услуг по&nbsp;аутсорсу в&nbsp;любом регионе&nbsp;России</p>
									</div>
								</div>
								<div class="splide__slide-block-2 splide__slide-block-2--slide-3 ">
									<div class="splide__slide-info">
										<p class="splide__slide-info-title">Курьер на&nbsp;своём автомобиле</p>

										<BasicBadges>
											<BasicBadgesItem>
												<template #title>>10 лет</template>
												<template #desc>Минимальный стаж вождения</template>
											</BasicBadgesItem>
											<BasicBadgesItem>
												<template #title>от 25 лет</template>
												<template #desc>Возраст всех наших водителей</template>
											</BasicBadgesItem>
										</BasicBadges>

									</div>
								</div>
							</div>
						</SplideSlide>
						<SplideSlide>
							<div class="splide__slide-inner">
								<div class="splide__slide-block-1">

									<BasicTags :tags="['Аутсорсинг курьеров', 'Поиск работы']" class="splide__slide-tags" />

									<h1 class="splide__slide-title">ТВОЯ КАРЬЕРА НАЧИНАЕТСЯ ЗДЕСЬ!</h1>
									<p class="splide__slide-desc">Компания оказывает услуги по аутсорсингу курьеров в Москве и Московской области. Наши курьеры оперативно доставят негабаритные грузы, продукцию или документы.</p>
									<div class="splide__slide-block-1-group">
										<button class="splide__slide-button button-basic" @click="$emitter.emit('showModalCallbackVacancy', 4)">
											Оставить заявку
										</button>
										<p class="splide__slide-block-1-group-desc">Все виды услуг по&nbsp;аутсорсу в&nbsp;любом регионе&nbsp;России</p>
									</div>
								</div>
								<div class="splide__slide-block-2 splide__slide-block-2--slide-4 ">
									<div class="splide__slide-info">
										<p class="splide__slide-info-title">Аутсорсинг кладовщиков</p>

										<BasicBadges>
											<BasicBadgesItem>
												<template #title>>10 лет</template>
												<template #desc>Минимальный стаж вождения</template>
											</BasicBadgesItem>
											<BasicBadgesItem>
												<template #title>от 25 лет</template>
												<template #desc>Возраст всех наших водителей</template>
											</BasicBadgesItem>
										</BasicBadges>

									</div>
								</div>
							</div>
						</SplideSlide>
						<SplideSlide>
							<div class="splide__slide-inner">
								<div class="splide__slide-block-1">

									<BasicTags :tags="['Аутсорсинг курьеров', 'Поиск работы']" class="splide__slide-tags" />

									<h1 class="splide__slide-title">ТВОЯ КАРЬЕРА НАЧИНАЕТСЯ ЗДЕСЬ!</h1>
									<p class="splide__slide-desc">Компания оказывает услуги по аутсорсингу курьеров в Москве и Московской области. Наши курьеры оперативно доставят негабаритные грузы, продукцию или документы.</p>
									<div class="splide__slide-block-1-group">
										<button class="splide__slide-button button-basic" @click="$emitter.emit('showModalCallbackVacancy', 5)">
											Оставить заявку
										</button>
										<p class="splide__slide-block-1-group-desc">Все виды услуг по&nbsp;аутсорсу в&nbsp;любом регионе&nbsp;России</p>
									</div>
								</div>
								<div class="splide__slide-block-2 splide__slide-block-2--slide-5 ">
									<div class="splide__slide-info">
										<p class="splide__slide-info-title">Аутсорсинг водителей</p>

										<BasicBadges>
											<BasicBadgesItem>
												<template #title>>10 лет</template>
												<template #desc>Минимальный стаж вождения</template>
											</BasicBadgesItem>
											<BasicBadgesItem>
												<template #title>от 25 лет</template>
												<template #desc>Возраст всех наших водителей</template>
											</BasicBadgesItem>
										</BasicBadges>

									</div>
								</div>
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
	</section>
</template>

<style scoped>
:global(:root) {
	--hero-inner-shadow-1: rgba(245 247 250 / 0.5);
	--hero-inner-shadow-2: rgba(245 247 250 / 0.4);
}

:global(:root[data-color-scheme="dark"]) {
	--hero-inner-shadow-1: rgba(245 247 250/ 0.15);
	--hero-inner-shadow-2: rgba(245 247 250 / 0.07);
}

.hero {}

.hero__inner {
	position: relative;
	min-height: 700px;
	height: 1px;
}

.hero__inner::before,
.hero__inner::after {
	content: "";
	position: absolute;
	z-index: -1;
	top: 50%;
	left: 50%;
	border-radius: var(--section-border-radius);
	transform: translate(-50%, -50%);
}

.hero__inner::before {
	width: calc(100% + 28px);
	height: calc(100% - 32px);
	background-color: var(--hero-inner-shadow-1);
}

.hero__inner::after {
	width: calc(100% + 54px);
	height: calc(100% - 88px);
	background-color: var(--hero-inner-shadow-2);
}

/* carousel */
.hero__splide {
	height: 100%;
	border-radius: var(--section-border-radius);
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
	top: 30px;
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
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;
	height: 100%;
	background-color: #f5f7fa;
}

.splide__slide-block-1 {
	padding: 50px 0 46px 57px;
}

.splide__slide-tags {
	margin-bottom: 87px;
}

.splide__slide-title {
	margin-bottom: 23px;
	font-family: var(--secondary-font-family);
	font-size: 70px;
	font-weight: 400;
	line-height: 1.16622;
	letter-spacing: -0.01em;
	color: #2b2a29;
}

.splide__slide-desc {
	max-width: 650px;
	margin-bottom: 108px;
	font-weight: 400;
	font-size: 18px;
	line-height: 1.66667;
	color: rgba(12 53 44 / 0.8);
}

.splide__slide-block-1-group {
	display: grid;
	grid-auto-flow: column;
	align-items: center;
	gap: 55px;
}

.splide__slide-button {
	display: flex;
	justify-content: center;
	align-items: center;
	width: fit-content;
	padding: 1.2em 3.3em;
	font-family: var(--secondary-font-family);
	font-size: 28px;
	font-weight: 400;
	color: #1c1c1c;
	border: none;
	border-radius: 30px;
	box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
}

.splide__slide-block-1-group-desc {
	font-size: 22px;
	font-weight: 400;
	line-height: 1.36;
	color: #080a05;
}

.splide__slide-block-2 {
	display: flex;
	align-items: end;
	border-radius: var(--section-border-radius);
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	overflow: hidden;
}

.splide__slide-block-2--slide-1 {
	background-image: url("/images/hero/1.jpg");
}

.splide__slide-block-2--slide-2 {
	background-image: url("/images/hero/2.jpg");
}

.splide__slide-block-2--slide-3 {
	background-image: url("/images/hero/3.jpg");
}

.splide__slide-block-2--slide-4 {
	background-image: url("/images/hero/4.jpg");
}

.splide__slide-block-2--slide-5 {
	background-image: url("/images/hero/5.jpg");
}

.splide__slide-info {
	display: grid;
	grid-template-columns: 1fr auto;
	align-items: center;
	gap: 35px;
	width: 100%;
	padding: 45px 40px;
	background-color: #fee02e;
	border-top-left-radius: var(--border-radius);
	border-top-right-radius: var(--border-radius);
}

.splide__slide-info-title {
	font-family: var(--secondary-font-family);
	font-size: 42px;
	font-weight: 400;
	line-height: 1;
	text-align: right;
	color: #1c1c1c;
}

.splide__slide-info-badges {}

@media (max-width: 1799.98px) {
	.splide__slide-block-1-group {
		gap: 45px;
	}

	.splide__slide-info-title {
		font-size: 34px;
	}
}

@media (max-width: 1699.98px) {
	.splide__slide-title {
		font-size: 60px;
	}

	.splide__slide-block-1-group-desc {
		font-size: 20px;
	}

	.splide__slide-button {
		font-size: 24px;
	}
}

@media (max-width: 1599.98px) {
	.splide__slide-info {
		grid-template-columns: 100%;
	}

	.splide__slide-info-title {
		text-align: center;
	}

	.splide__slide :deep(.badges__item) {
		max-width: none;
		min-height: 80px;
	}
}

@media (max-width: 1499.98px) {
	.splide__slide-tags {
		margin-bottom: 70px;
	}

	.splide__slide-title {
		font-size: 50px;
	}

	.splide__slide-desc {
		margin-bottom: 80px;
	}

	.splide__slide-block-1-group {
		gap: 35px;
	}

	.splide__slide-button {
		font-size: 22px;
	}

	.splide__slide-block-1-group-desc {
		font-size: 18px;
	}

	.splide__slide-info-title {
		font-size: 30px;
	}
}

@media (max-width: 1399.98px) {
	.splide__slide-title {
		font-size: 40px;
	}

	.splide__slide-block-1-group {
		grid-auto-flow: row;
		gap: 25px;
	}

	.splide__slide-button {
		font-size: 22px;
		order: 2;
	}
}

@media (max-width: 1199.98px) {
	.splide__slide-title {
		font-size: 34px;
	}

	.splide__slide-info {
		gap: 25px;
		padding: 35px 30px;
	}
}

@media (max-width: 991.98px) {
	.hero__inner {
		height: auto;
	}

	.splide__slide-inner {
		grid-template-columns: 100%;
		gap: 50px;
	}

	.splide__slide-tags {
		margin-bottom: 50px;
	}

	.splide__slide-desc {
		margin-bottom: 60px;
	}

	.splide__slide-block-1 {
		padding: 50px 40px 0 40px;
	}

	.splide__slide-block-1-group {
		grid-auto-flow: column;
	}

	.splide__slide-button {
		order: 0;
	}

	.splide__slide-block-2 {
		height: 500px;
	}
}

@media (max-width: 767.98px) {
	.splide__slide-block-1 {
		padding: 40px 30px 0 30px;
	}

	.splide__slide-inner {
		gap: 40px;
	}

	.splide__slide-tags {
		margin-bottom: 40px;
	}

	.splide__slide-desc {
		margin-bottom: 40px;
		font-size: 16px;
	}

	.splide__slide-block-1-group-desc {
		display: none;
	}

	.splide__slide-button {
		font-size: 20px;
	}

	.splide__slide-info {
		padding: 30px;
	}

	.splide__slide-info-title {
		font-size: 28px;
	}

	.splide__slide :deep(.badges__item-title) {
		font-size: 24px;
	}
}

@media (max-width: 575.98px) {

	.hero__inner::before,
	.hero__inner::after {
		display: none;
	}

	.splide {
		padding-bottom: 25px;
	}

	.splide__slide {
		border-radius: var(--section-border-radius);
		overflow: hidden;
	}

	.splide__slide-inner {
		gap: 30px;
	}

	.splide__slide-block-1 {
		padding: 30px 30px 0 30px;
	}

	.splide__slide-tags {
		margin-bottom: 30px;
	}

	.splide__slide :deep(.tags__list) {
		--gap: 8px;
	}

	.splide__slide :deep(.tags__item) {
		font-size: 10px;
	}

	.splide__slide-title {
		margin-bottom: 10px;
		font-size: 30px;
	}

	.splide__slide-desc {
		margin-bottom: 30px;
		font-size: 14px;
	}

	.splide__slide-button {
		width: 100%;
		font-size: 18px;
	}

	.splide__slide-block-2 {
		height: 400px;
	}

	.splide__slide-info {
		gap: 20px;
		padding: 25px 30px;
	}

	.splide__slide-info-title {
		font-size: 24px;
	}

	.splide__slide :deep(.badges__list) {
		gap: 8px;
	}

	.splide__slide :deep(.badges__item) {
		padding: 8px 14px 10px;
		border-radius: 10px;
		min-height: auto;
	}

	.splide__slide :deep(.badges__item-title) {
		font-size: 18px;
	}

	.splide__slide :deep(.badges__item-desc) {
		font-size: 10px;
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

@media (max-width: 479.98px) {
	.splide__slide-desc {
		font-size: 12px;
		line-height: 1.5;
	}

	.splide__slide-button {
		border-radius: 16px;
		font-size: 16px;
	}

	.splide__slide-block-2 {
		height: 340px;
	}

	.splide__slide-block-1[data-v-370f40d5] {
		padding: 25px 20px 0 20px;
	}

	.splide__slide-info[data-v-370f40d5] {
		padding: 15px 20px;
	}
}
</style>