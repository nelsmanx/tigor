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
				<template #desc>Более 1000 новых автомобилей по Москве и МО<br /> Предоставление легковых автомобилей, спец. техники, газелей</template>
			</BasicSectionHeader>

			<div class="fleet__body">
				<div class="container">
					<Splide class="fleet__splide" :has-track="false" :options="{
						type: 'loop',
						perPage: 1,
						perMove: 1,
						gap: 30,
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
								<div class="fleet__splide-inner">
									<div class="fleet__splide-content">
										<p class="fleet__splide-title">Легковые автомобили</p>
										<div class="fleet__splide-desc">
											<p>Мы предоставляем только новые автомобили, все машины оснащены современным оборудованием, обеспечат комфорт и безопасность в любой поездке. Подходят для повседневного использования или решения деловых задач.</p>
											<ul>
												<li><b>Модели:</b> Лада Гранта, Москвич 3.</li>
												<li><b>Количество:</b> Более 300 автомобилей</li>
												<li><b>Год выпуска:</b> Новые, 2023-2024 года.</li>
												<li><b>Дополнительное оборудование:</b><br>Современные мультимедиа, система мониторинга Старлайн</li>
												<li><b>Географический охват:</b> Москва и Московская область</li>
											</ul>
										</div>
									</div>
									<picture class="splide__slide-picture">
										<img class="splide__slide-image" src="/images/fleet/1.jpg" alt="Легковой автомобиль">
									</picture>
								</div>
							</SplideSlide>

							<SplideSlide>
								<div class="fleet__splide-inner">
									<div class="fleet__splide-content">
										<p class="fleet__splide-title">Газели NEXT (рефрижератор)</p>
										<div class="fleet__splide-desc">
											<p>Новые рефрижераторы с точным контролем температуры идеально подходят для перевозки скоропортящихся грузов. Мы гарантируем надежность техники и сохранность вашего товара.</p>
											<ul>
												<li><b>Модели:</b> Лада Гранта, Москвич 3.</li>
												<li><b>Количество:</b> Более 50 автомобилей.</li>
												<li><b>Год выпуска:</b> 2023г</li>
												<li><b>Дополнительное оборудование:</b><br> Система обогрева Вебасто, система мониторинга Старлайн.</li>
											</ul>
										</div>
									</div>
									<picture class="splide__slide-picture">
										<img class="splide__slide-image" src="/images/fleet/2.jpg" alt="Легковой автомобиль">
									</picture>
								</div>
							</SplideSlide>

							<SplideSlide>
								<div class="fleet__splide-inner">
									<div class="fleet__splide-content">
										<p class="fleet__splide-title">Специальная техника (бетономешалки)</p>
										<div class="fleet__splide-desc">
											<p>Бетономешалки готовы к работе на объектах любого масштаба, с возможностью аренды по всей России. Аренда с экипажем обеспечит эффективное выполнение задач.</p>
											<ul>
												<li><b>Количество:</b> Более 10 транспортных средств</li>
												<li><b>Местонахождение:</b> Волгоград.</li>
												<li><b>Географический охват:</b> Аренда по всей России.</li>
												<li><b>Дополнительные услуги:</b> Аренда с экипажем по согласованию.</li>
											</ul>
										</div>
									</div>
									<picture class="splide__slide-picture">
										<img class="splide__slide-image" src="/images/fleet/3.jpg" alt="Легковой автомобиль">
									</picture>
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

/* carousel */
.splide {
	/* height: 100%; */
	/* border-radius: 30px; */
	/* overflow: hidden; */
}

.splide__track {
	/* height: 100%; */
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

.fleet__splide-inner {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;
	height: 100%;
}

.fleet__splide-content {
	padding-right: 94px;
}

.fleet__splide-title {
	margin-bottom: 12px;
	font-size: 32px;
	font-weight: 600;
	color: #1c1c1c;
}

.fleet__splide-desc:deep(p) {
	margin-bottom: 35px;
	font-size: 22px;
	font-weight: 400;
	line-height: 1.55;
	color: #1c1c1c;
}

.fleet__splide-desc:deep(ul) {
	display: grid;
	row-gap: 20px;
}

.fleet__splide-desc:deep(li) {
	position: relative;
	padding-left: 20px;
	font-size: 20px;
	font-weight: 400;
	line-height: 1.55;
	color: #6e6e6e;
}

.fleet__splide-desc:deep(li b) {
	color: #1c1c1c;
}

.fleet__splide-desc:deep(li::before) {
	content: "";
	position: absolute;
	top: 10px;
	left: 0;
	width: 8px;
	height: 8px;
	background-color: #fee02e;
	border-radius: 2px;
}

.splide__slide-picture {
	position: relative;
	display: block;
	width: 100%;
	/* height: 0;
	padding: calc(100% / (840 / 515)) 0 0; */
	height: 100%;
	min-height: 515px;
	border-radius: 30px;
	overflow: hidden;
}

.splide__slide-image {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
}

@media (max-width: 1699.98px) {
	.fleet__splide-content {
		padding-right: 30px;
	}

	.fleet__splide-title {
		margin-bottom: 8px;
		font-size: 24px;
	}

	.fleet__splide-desc:deep(p) {
		margin-bottom: 30px;
		font-size: 18px;
	}

	.fleet__splide-desc:deep(ul) {
		row-gap: 8px;
	}

	.fleet__splide-desc:deep(li) {
		padding-left: 16px;
		font-size: 16px;
	}

	.fleet__splide-desc:deep(li::before) {
		top: 8px;
		width: 6px;
		height: 6px;
	}

	.splide__slide-picture {
		min-height: 435px;
	}
}

@media (max-width: 1399.98px) {
	.fleet__body {
		padding: 40px 0 40px;
	}

	.splide__arrows.splide__arrows--ltr {
		bottom: 20px;
	}

	.splide__slide-picture {
		min-height: 330px;
	}
}

@media (max-width: 1199.98px) {
	.fleet__splide-inner {
		grid-template-columns: 100%;
		grid-template-rows: 1fr auto;
		height: 100%;
	}

	.fleet__splide-content {
		padding-right: 0;
	}

	.splide__slide-picture {
		height: 0;
		min-height: auto;
		padding: calc(100% / (16 / 9)) 0 0;
	}
}

@media (max-width: 991.98px) {
	.fleet__body {
		padding: 30px 0;
	}

	.fleet__splide-title {
		margin-bottom: 6px;
		font-size: 22px;
	}

	.fleet__splide-desc:deep(p) {
		margin-bottom: 20px;
		font-size: 16px;
	}
}

@media (max-width: 767.98px) {
	.fleet__splide-title {
		font-size: 20px;
	}

	.splide__arrows.splide__arrows--ltr {
		bottom: 20px;
		right: 20px;
	}

	.fleet__splide-picture {
		border-radius: 20px;
	}
}

@media (max-width: 575.98px) {
	.fleet__body {
		padding: 30px 0 20px;
	}

	.splide {
		padding-bottom: 25px;
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

	.fleet__splide-inner {
		height: auto;
	}

	.fleet__splide-title {
		margin-bottom: 4px;
		font-size: 18px;
	}

	.fleet__splide-desc:deep(p) {
		margin-bottom: 15px;
		font-size: 14px;
	}

	.fleet__splide-desc:deep(ul) {
		row-gap: 4px;
	}

	.fleet__splide-desc:deep(li) {
		padding-left: 12px;
		font-size: 14px;
	}

	.fleet__splide-desc:deep(li::before) {
		top: 9px;
		width: 4px;
		height: 4px;
	}
}

@media (max-width: 379.98px) {
	.fleet__body {
		padding: 20px 0;
	}

	.fleet__splide-inner {
		gap: 20px;
	}

	.fleet__splide-title {
		margin-bottom: 2px;
		font-size: 16px;
	}

	.splide__slide-picture {
		height: 200px;
		padding: 0;
	}
}
</style>