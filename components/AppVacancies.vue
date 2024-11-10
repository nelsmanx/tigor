<script setup></script>

<template>
	<section class="vacancies">
		<div class="container">
			<div class="vacancies__headline">
				<h2 class="vacancies__title">Приглашаем Вас на&nbsp;вакансии</h2>
				<p class="vacancies__desc">Мы не набираем квалифицированнй персонал. и .т.д. Включает в себя поиск, найм, обучение, оплату и управление работниками, которые выполняют Ведение делопроизводства, оформление договоров.</p>
			</div>
			<ul class="vacancies__list">
				<li class="vacancies__item vacancies__item--button">
					<button class="vacancies__item-button button-basic">Оставить заявку</button>
				</li>
				<li class="vacancies__item">
					<div class="vacancies__item-inner">
						<div class="vacancies__item-icon">
							<img class="vacancies__item-icon-img vacancies__item-icon-img--1" src="/images/vacancies/1.svg" alt="" aria-hidden="true">
						</div>
						<p class="vacancies__item-title">Водители-курьеры</p>
						<p class="vacancies__item-desc">На авто компании</p>
					</div>
				</li>
				<li class="vacancies__item">
					<div class="vacancies__item-inner">
						<div class="vacancies__item-icon">
							<img class="vacancies__item-icon-img vacancies__item-icon-img--2" src="/images/vacancies/2.svg" alt="" aria-hidden="true">
						</div>
						<p class="vacancies__item-title">Сборщики/пикеры</p>
						<p class="vacancies__item-desc">На склады компании</p>
					</div>
				</li>
				<li class="vacancies__item">
					<div class="vacancies__item-inner">
						<div class="vacancies__item-icon">
							<img class="vacancies__item-icon-img vacancies__item-icon-img--3" src="/images/vacancies/3.svg" alt="" aria-hidden="true">
						</div>
						<p class="vacancies__item-title">Кладовщики, Грузчики</p>
						<p class="vacancies__item-desc">На склады компании</p>
					</div>
				</li>
			</ul>
		</div>
	</section>
</template>

<style scoped>
.vacancies {
	padding: 82px 0 92px;
}

.vacancies__headline {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;
	align-items: center;
	margin-bottom: 50px;
}

.vacancies__title {
	max-width: 500px;
	font-family: var(--secondary-font-family);
	font-size: 52px;
	font-weight: 400;
	color: var(--font-basic);
}

.vacancies__desc {
	font-weight: 400;
	font-size: 22px;
	line-height: 1.54545;
	color: var(--font-basic);
}

.vacancies__list {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 32px;
}

.vacancies__item {
	display: flex;
	align-items: center;
	height: 120px;
	padding: 18px 30px;
	border-radius: 30px;
	background-color: #f5f7fa;
}

.vacancies__item--button {
	padding: 18px;
}

.vacancies__item-button {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: 8px;
	font-family: var(--secondary-font-family);
	font-size: 28px;
	font-weight: 400;
	color: #1c1c1c;
	border-radius: 16px;
}

.vacancies__item-inner {
	display: grid;
	grid-template-areas:
		"icon title"
		"icon desc";
	grid-template-columns: auto 1fr;
	align-items: start;
	gap: 5px 23px;
}

.vacancies__item-icon {
	grid-area: icon;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 54px;
	height: 54px;
	background-color: #fee02e;
	border-radius: 12px;
}

.vacancies__item-icon-img--1 {
	width: 35px;
}

.vacancies__item-icon-img--2 {
	width: 31px;
}

.vacancies__item-icon-img--3 {
	width: 32px;
}

.vacancies__item-title {
	grid-area: title;
	font-size: 22px;
	font-weight: 600;
	color: #0c352c;
}

.vacancies__item-desc {
	grid-area: desc;
	font-size: 20px;
	font-weight: 400;
	color: rgba(12 53 44/ 0.7);
}
</style>