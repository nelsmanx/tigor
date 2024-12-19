<script setup></script>

<template>
	<section class="outsource">
		<div class="container">
			<div class="outsource__headline">
				<h2 class="outsource__title">Предоставляем персонал:</h2>
				<p v-if="false" class="outsource__desc">Включает в себя поиск, найм, обучение, оплату и управление работниками, которые выполняют определенные задачи для вашей компании. Ведение делопроизводства, оформление договоров, учет рабочего времени.</p>
			</div>

			<ul class="outsource__list">
				<!-- Для доставки -->
				<li class="outsource__item">
					<div class="outsource__item-header outsource__item-header--1">
						<BasicBadges v-if="false" class="outsource__item-badges outsource__item-badges--1">
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
					<div class="outsource__item-body">
						<div class="outsource__item-block-1">
							<p class="outsource__item-title">Для доставки</p>
							<p class="outsource__item-desc">Нашим курьерам можно поручить доставку заказов интернет-магазинов, корреспонденции, посылок, цветов, подарков, продуктов питания</p>
						</div>
						<div class="outsource__item-block-2">
							<ul class="outsource__item-positions">
								<li class="outsource__item-position">Курьеры на своем автомобиле</li>
								<li class="outsource__item-position">Курьеры на вашем автомобиле</li>
								<li class="outsource__item-position">Курьеры пешие</li>
								<li class="outsource__item-position">Курьеры на велосипедах</li>
								<li class="outsource__item-position">Курьеры на нашем авто</li>
								<li class="outsource__item-position">Курьеры на грузовых автомобилях</li>
							</ul>
						</div>
					</div>
					<div class="outsource__item-footer">
						<button class="outsource__item-button button-basic" data-bs-toggle="modal" data-bs-target="#modal-callback">Оставить заявку</button>
					</div>
				</li>
				<!-- Для торговых сетей -->
				<li class="outsource__item">
					<div class="outsource__item-header outsource__item-header--2">
						<BasicBadges class="outsource__item-badges outsource__item-badges--1">
							<BasicBadgesItem>
								<template #title>>10 000</template>
								<template #desc>Действующих сотрудников</template>
							</BasicBadgesItem>
							<BasicBadgesItem v-if="false">
								<template #title>от 18 лет</template>
								<template #desc>Какое-то описание небольшое</template>
							</BasicBadgesItem>
						</BasicBadges>
					</div>
					<div class="outsource__item-body">
						<div class="outsource__item-block-1">
							<p class="outsource__item-title">Для торговых сетей</p>
							<p class="outsource__item-desc">Наши сотрудники готовы взять на себя задачи по сборке заказов, выкладке товаров, приемке и обработке грузов, а также по поддержанию порядка в торговых залах и на складах.</p>
						</div>
						<div class="outsource__item-block-2">
							<ul class="outsource__item-positions outsource__item-positions--2-col">
								<li class="outsource__item-position">Сборщики заказов</li>
								<li class="outsource__item-position">Кондитеры</li>
								<li class="outsource__item-position">Повара</li>
								<li class="outsource__item-position">Грузчики</li>
								<li class="outsource__item-position">Продавцы</li>
								<li class="outsource__item-position">Пекари</li>
								<li class="outsource__item-position">Кассиры</li>
								<li class="outsource__item-position">Фасовщики</li>
								<li class="outsource__item-position">Уборщики</li>
								<li class="outsource__item-position">Упаковщики</li>
								<li class="outsource__item-position">Работники торгового зала</li>
								<li class="outsource__item-position">Подсобные рабочие</li>
							</ul>
						</div>
					</div>
					<div class="outsource__item-footer">
						<button class="outsource__item-button button-basic" data-bs-toggle="modal" data-bs-target="#modal-callback">Оставить заявку</button>
					</div>
				</li>
				<!-- Для складов -->
				<li class="outsource__item">
					<div class="outsource__item-header outsource__item-header--3">
						<BasicBadges v-if="false" class="outsource__item-badges outsource__item-badges--2">
							<BasicBadgesItem>
								<template #title>>10 лет</template>
								<template #desc>Какое-то описание небольшое</template>
							</BasicBadgesItem>
							<BasicBadgesItem>
								<template #title>от 18 лет</template>
								<template #desc>Какое-то описание небольшое</template>
							</BasicBadgesItem>
						</BasicBadges>
					</div>
					<div class="outsource__item-body">
						<div class="outsource__item-block-1">
							<p class="outsource__item-title">Для складов</p>
							<p class="outsource__item-desc">Наши специалисты выполняют задачи по приемке и размещению товаров, сборке заказов, погрузке и разгрузке, инвентаризации и обеспечению порядка на складе.</p>
						</div>
						<div class="outsource__item-block-2">
							<ul class="outsource__item-positions">
								<li class="outsource__item-position">Комплектовщики</li>
								<li class="outsource__item-position">Упаковщики</li>
								<li class="outsource__item-position">Кладовщики</li>
							</ul>
						</div>
					</div>
					<div class="outsource__item-footer">
						<button class="outsource__item-button button-basic" data-bs-toggle="modal" data-bs-target="#modal-callback">Оставить заявку</button>
					</div>
				</li>
				<!-- Для производств -->
				<li class="outsource__item">
					<div class="outsource__item-header outsource__item-header--4">
						<BasicBadges v-if="false" class="outsource__item-badges outsource__item-badges--2">
							<BasicBadgesItem>
								<template #title>>10 лет</template>
								<template #desc>Какое-то описание небольшое</template>
							</BasicBadgesItem>
							<BasicBadgesItem>
								<template #title>от 18 лет</template>
								<template #desc>Какое-то описание небольшое</template>
							</BasicBadgesItem>
						</BasicBadges>
					</div>
					<div class="outsource__item-body">
						<div class="outsource__item-block-1">
							<p class="outsource__item-title">Для производств</p>
							<p class="outsource__item-desc">Наши сотрудники обеспечивают выполнение задач на всех этапах производства: от подготовки и упаковки продукции до погрузочно-разгрузочных работ, сортировки материалов и поддержки чистоты на рабочих участках.</p>
						</div>
						<div class="outsource__item-block-2">
							<ul class="outsource__item-positions">
								<li class="outsource__item-position">Разнорабочие</li>
								<li class="outsource__item-position">Операторы линии</li>
								<li class="outsource__item-position">Фасовщики</li>
								<li class="outsource__item-position">Грузчики</li>
							</ul>
						</div>
					</div>
					<div class="outsource__item-footer">
						<button class="outsource__item-button button-basic" data-bs-toggle="modal" data-bs-target="#modal-callback">Оставить заявку</button>
					</div>
				</li>
			</ul>
		</div>
	</section>
</template>

<style scoped>
.outsource {
	padding: 92px 0 94px;
}

.outsource__headline {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;
	align-items: center;
	margin-bottom: 56px;
}

.outsource__title {
	/* max-width: 500px; */
	font-family: var(--secondary-font-family);
	font-size: var(--section-title-fz);
	font-weight: 400;
	color: var(--font-basic);
}

.outsource__desc {
	font-weight: 400;
	font-size: 22px;
	line-height: 1.54545;
	color: var(--font-basic);
}

.outsource__list {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 58px 30px;
}

.outsource__item {
	display: grid;
	grid-template-rows: auto 1fr auto;
	background-color: #f5f7fa;
	--border-radius: 30px;
	border-radius: var(--border-radius);
	overflow: hidden;
	--padding-inline: 50px;
}

.outsource__item-header {
	/* display: block;
	width: 100%;
	height: 0;
	padding: calc(100% / (842 / 360)) 0 0; */
	position: relative;
	height: 360px;
	background-size: cover;
	background-position: top center;
	background-repeat: no-repeat;
	border-bottom-left-radius: var(--border-radius);
	border-bottom-right-radius: var(--border-radius);
	overflow: hidden;
}

.outsource__item-header--1 {
	background-image: url("/images/outsource/1.jpg");
}

.outsource__item-header--2 {
	background-image: url("/images/outsource/2.jpg");
}

.outsource__item-header--3 {
	background-image: url("/images/outsource/3.jpg");
}

.outsource__item-header--4 {
	background-image: url("/images/outsource/4.jpg");
}

.outsource__item-badges {
	position: absolute;
	right: 28px;
}

.outsource__item-badges--1 {
	bottom: 28px;
}

.outsource__item-badges--2 {
	top: 32px;
}

.outsource :deep(.badges__item) {
	background-color: #fee02e;
}

.outsource__item-body {
	display: grid;
	grid-template-rows: auto 1fr;
}

.outsource__item-block-1 {
	padding-inline: var(--padding-inline);
	padding-top: 23px;
	padding-bottom: 40px;
	border-bottom: 1px solid #e3e3e3;
}

.outsource__item-title {
	margin-bottom: 16px;
	font-size: 42px;
	font-weight: 400;
	color: #1c1c1c;
}

.outsource__item-desc {
	font-size: 18px;
	font-weight: 400;
	line-height: 1.55;
	color: rgba(12 53 44 / 0.8);
}

.outsource__item-block-2 {
	padding-inline: var(--padding-inline);
	padding-top: 34px;
	padding-bottom: 48px;
	border-bottom: 1px solid #e3e3e3;
}

.outsource__item-positions {
	display: grid;
	row-gap: 21px;
}

.outsource__item-positions--2-col {
	grid-template-columns: repeat(2, auto);
	justify-content: start;
	column-gap: 70px;
}

.outsource__item-position {
	position: relative;
	padding-left: 22px;
	font-size: 20px;
	font-weight: 400;
	color: #080a05;
}

.outsource__item-position::before {
	content: "";
	position: absolute;
	top: 7px;
	left: 0;
	width: 8px;
	height: 8px;
	background-color: #fee02e;
	border-radius: 2px;
}

.outsource__item-footer {
	padding-inline: var(--padding-inline);
	padding-top: 43px;
	padding-bottom: 43px;
}

.outsource__item-button {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
	width: 100%;
	height: 97px;
	font-family: var(--secondary-font-family);
	font-size: 28px;
	font-weight: 400;
	color: #1c1c1c;
	border-radius: 16px;
	box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
}

@media (max-width: 1499.98px) {
	.outsource__item-badges--2 {
		top: auto;
		bottom: 28px;
	}
}

@media (max-width: 1399.98px) {
	.outsource__headline {
		display: block;
		margin-bottom: 45px;
	}

	.outsource__title {
		max-width: none;
		margin-bottom: 30px;
	}

	.outsource:deep(.badges__item) {
		min-height: auto;
	}

	.outsource:deep(.badges__item-title) {
		font-size: 24px;
	}

	.outsource:deep(.badges__item-desc) {
		font-size: 12px;
	}

	.outsource__item {
		--padding-inline: 40px;
	}

	.outsource__item-header {
		height: 270px;
	}

	.outsource__item-block-1 {
		padding-top: 20px;
		padding-bottom: 30px;
	}

	.outsource__item-title {
		font-size: 36px;
	}

	.outsource__item-badges {
		width: 100%;
		left: 0;
		right: 0;
		bottom: 20px;
	}

	.outsource:deep(.badges__list) {
		justify-content: center;
	}

	.outsource__item-block-2 {
		padding-top: 30px;
		padding-bottom: 40px;
	}

	.outsource__item-positions {
		row-gap: 15px;
	}

	.outsource__item-positions--2-col {
		column-gap: 50px;
	}

	.outsource__item-position {
		padding-left: 18px;
		font-size: 18px;
	}

	.outsource__item-position::before {
		top: 8px;
		width: 6px;
		height: 6px;
	}

	.outsource__item-footer {
		padding-block: 30px;
	}

	.outsource__item-button {
		font-size: 24px;
	}
}

@media (max-width: 1199.98px) {
	.outsource__item-title {
		font-size: 32px;
	}
}

@media (max-width: 991.98px) {
	.outsource {
		padding: var(--section-space) 0;
	}

	.outsource__headline {
		margin-bottom: 30px;
	}

	.outsource__list {
		grid-template-columns: 100%;
		gap: 40px;
	}

	.outsource__item-badges {
		width: fit-content;
		left: auto;
		right: 20px;
		bottom: 20px;
	}

	.outsource__desc {
		font-size: 20px;
	}
}

@media (max-width: 767.98px) {
	.outsource__title {
		margin-bottom: 30px;
	}

	.outsource__desc {
		font-size: 18px;
	}

	.outsource__item {
		--padding-inline: 30px;
	}

	.outsource__item-title {
		font-size: 28px;
	}

	.outsource__item-desc {
		font-size: 16px;
		font-weight: 400;
		line-height: 1.55;
		color: rgba(12 53 44 / 0.8);
	}

	.outsource__item-block-1 {
		padding-block: 20px;
	}

	.outsource__item-block-1 {
		padding-block: 25px;
	}

	.outsource__item-footer {
		padding-block: 20px;
	}

	.outsource__item-button {
		height: 80px;
		font-size: 20px;
	}

	.outsource__item-badges {
		width: 100%;
		left: 0;
		right: 0;
		bottom: 20px;
	}

	.outsource:deep(.badges__list) {
		grid-template-columns: repeat(2, 1fr);
		justify-content: center;
		gap: 10px;
		padding-inline: 20px;
	}

	.badges__item {
		max-width: none;
		width: 100%;
	}

	.outsource:deep(.badges__item-title) {
		font-size: 20px;
	}
}

@media (max-width: 575.98px) {
	.outsource__title {
		margin-bottom: 20px;
	}

	.outsource__desc {
		font-size: 16px;
	}

	.outsource__item-block-1 {
		padding-block: 20px;
	}

	.outsource__item-badges {
		bottom: 15px;
	}

	.outsource:deep(.badges__item) {
		padding: 12px 16px;
		border-radius: 10px;
	}

	.outsource:deep(.badges__item-title) {
		margin-bottom: 3px;
		font-size: 20px;
	}

	.outsource__item-title {
		margin-bottom: 12px;
		font-size: 24px;
	}

	.outsource__item-desc {
		font-size: 14px;
	}

	.outsource__item-block-2 {
		padding-block: 25px;
	}

	.outsource__item-positions {
		row-gap: 10px;
		column-gap: 30px;
	}

	.outsource__item-position {
		padding-left: 16px;
		font-size: 16px;
	}

	.outsource__item-button {
		height: 70px;
		font-size: 18px;
	}
}

@media (max-width: 479.98px) {
	.outsource__item {
		--padding-inline: 20px;
	}

	.outsource__item-header {
		height: 230px;
	}

	.outsource:deep(.badges__item-title) {
		font-size: 18px;
	}

	.outsource__item-title {
		margin-bottom: 10px;
		font-size: 22px;
	}

	.outsource__item-block-2 {
		padding-block: 20px;
	}

	.outsource__item-positions {
		row-gap: 8px;
	}

	.outsource__item-position {
		padding-left: 10px;
		font-size: 14px;
	}

	.outsource__item-position::before {
		width: 4px;
		height: 4px;
	}

	.outsource__item-button {
		height: 60px;
		font-size: 16px;
		border-radius: 12px;
	}
}
</style>