<script setup></script>

<template>
	<section class="benefits section-island">
		<div class="benefits__inner">

			<BasicSectionHeader>
				<template #title>Наши преимущества</template>
				<template #desc>Работаем в 150+ городах России.<br /> Быстрые сроки открытия нового города.</template>
			</BasicSectionHeader>

			<div class="benefits__body">
				<div class="container">
					<ul class="benefits__list">
						<li class="benefits__item">
							<div class="benefits__icon">
								<img class="benefits__icon-img benefits__icon-img--1" src="/images/benefits/1.svg" alt="" aria-hidden="true">
							</div>
							<p class="benefits__item-title">Выполнение<br /> заявки до 97%</p>
							<p class="benefits__item-desc">В заявленный срок</p>
						</li>
						<li class="benefits__item">
							<div class="benefits__icon">
								<img class="benefits__icon-img benefits__icon-img--2" src="/images/benefits/2.svg" alt="" aria-hidden="true">
							</div>
							<p class="benefits__item-title">Минимальная<br /> текучка кадров</p>
							<p class="benefits__item-desc">Показатель КТК ниже 3%</p>
						</li>
						<li class="benefits__item">
							<div class="benefits__icon">
								<img class="benefits__icon-img benefits__icon-img--3" src="/images/benefits/3.svg" alt="" aria-hidden="true">
							</div>
							<p class="benefits__item-title">Полная налоговая<br /> прозрачность</p>
							<p class="benefits__item-desc">С предоставлением отчетности</p>
						</li>
						<li class="benefits__item">
							<div class="benefits__icon">
								<img class="benefits__icon-img benefits__icon-img--4" src="/images/benefits/4.svg" alt="" aria-hidden="true">
							</div>
							<p class="benefits__item-title">Оплата после<br /> оказания услуг</p>
							<p class="benefits__item-desc">Гарантируем результат!</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.benefits {}

.benefits__inner {
	background-color: #f5f7fa;
	border-radius: 50px;
}

.benefits__body {
	padding: 55px 0 65px;
}

.benefits__list {
	display: grid;
	grid-auto-flow: column;
	justify-content: start;
	gap: 110px;
}

.benefits__item {
	position: relative;
	width: 325px;
}

.benefits__item:not(:last-child)::before {
	content: "";
	position: absolute;
	top: 60px;
	right: 40px;
	width: 14px;
	height: 14px;
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.3' fill-rule='evenodd' clip-rule='evenodd' d='M12.9187 7.95538L7.95536 7.95546L7.95529 12.9188C7.95529 13.1614 7.85925 13.3787 7.70257 13.5354C7.54588 13.6921 7.32349 13.7932 7.08594 13.7881C6.96463 13.7881 6.85344 13.7679 6.7473 13.7224C6.64116 13.6769 6.54513 13.6112 6.46426 13.5304C6.3834 13.4495 6.31769 13.3535 6.2722 13.2473C6.23177 13.1462 6.2065 13.03 6.20145 12.9137L6.20152 7.95043L1.2382 7.9505C1.11689 7.9505 1.01075 7.92523 0.904613 7.87974C0.798474 7.83425 0.702443 7.76855 0.621575 7.68768C0.540708 7.60682 0.475003 7.51078 0.429516 7.40464C0.384029 7.2985 0.363813 7.18731 0.35876 7.07106C0.358763 6.82846 0.454798 6.61112 0.616539 6.44938C0.773224 6.29269 0.990561 6.19666 1.23317 6.19666L6.19649 6.19658L6.19656 1.23326C6.19656 0.990655 6.2926 0.773319 6.44928 0.616633C6.60597 0.459948 6.82836 0.358859 7.06591 0.36391C7.30852 0.363906 7.52585 0.459935 7.68759 0.62167C7.84427 0.778351 7.94535 1.00074 7.94535 1.24335L7.94528 6.20667L12.9086 6.2066C13.1512 6.20659 13.3685 6.30262 13.5303 6.46436C13.687 6.62104 13.788 6.84343 13.788 7.08603C13.788 7.32864 13.692 7.54597 13.5303 7.70771C13.3736 7.8644 13.1562 7.96043 12.9136 7.96044L12.9187 7.95538Z' fill='%231C1C1C' /%3E%3C/svg%3E");
}

.benefits__icon {
	display: flex;
	justify-content: center;
	align-items: center;
	--scale: 1;
	width: calc(124px * var(--scale));
	height: calc(128px * var(--scale));
	margin-bottom: 22px;
	background-color: #fee02e;
	border-radius: 30px;
}

.benefits__icon-img--1 {
	width: calc(61px * var(--scale));
	height: calc(66px * var(--scale));
}

.benefits__icon-img--2 {
	width: calc(79px * var(--scale));
	height: calc(60px * var(--scale));
}

.benefits__icon-img--3 {
	width: calc(64px * var(--scale));
	height: calc(60px * var(--scale));
}

.benefits__icon-img--4 {
	width: calc(60px * var(--scale));
	height: calc(58px * var(--scale));
}

.benefits__item-title {
	margin-bottom: 20px;
	font-size: 26px;
	font-weight: 600;
	line-height: 1.15;
	color: #1c1c1c;
}

.benefits__item-desc {
	font-size: 20px;
	font-weight: 400;
	line-height: 1.25;
	color: rgba(28 28 28/0.7);
}
</style>