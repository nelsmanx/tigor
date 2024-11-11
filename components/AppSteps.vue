<script setup></script>

<template>
	<section class="steps">
		<div class="container">
			<h2 class="steps__title">Как мы будем с Вами работать</h2>
			<ul class="steps__list">
				<li class="steps__item">
					<span class="steps__item-counter"></span>
					<span class="steps__item-marker"></span>
					<p class="steps__item-title">Заявка</p>
					<p class="steps__item-desc">Направление заявки с&nbsp;указанием требований и&nbsp;пожеланий</p>
				</li>
				<li class="steps__item">
					<span class="steps__item-counter"></span>
					<span class="steps__item-marker"></span>
					<p class="steps__item-title">Расчет</p>
					<p class="steps__item-desc">Рассчитываем и&nbsp;согласовываем стоимость&nbsp;услуг</p>
				</li>
				<li class="steps__item">
					<span class="steps__item-counter"></span>
					<span class="steps__item-marker"></span>
					<p class="steps__item-title">Договор</p>
					<p class="steps__item-desc">Согласование деталей, заключение договора</p>
				</li>
				<li class="steps__item">
					<span class="steps__item-counter"></span>
					<span class="steps__item-marker"></span>
					<p class="steps__item-title">Подбор персонала</p>
					<p class="steps__item-desc">Подбор и вывод исполнителей</p>
				</li>
				<li class="steps__item">
					<span class="steps__item-counter"></span>
					<span class="steps__item-marker"></span>
					<p class="steps__item-title">Выполнение работ</p>
					<p class="steps__item-desc">Проведение работ, контроль персональным менеджером</p>
				</li>
				<li class="steps__item">
					<span class="steps__item-counter"></span>
					<span class="steps__item-marker"></span>
					<p class="steps__item-title">Отчет</p>
					<p class="steps__item-desc">Отчетная документация каждый месяц</p>
				</li>
			</ul>
		</div>
	</section>
</template>


<style scoped>
:global(:root) {
	--steps-item-marker: #fff;
	--steps-item-desc: rgba(28 28 28 / 0.6);
}

:global(:root[data-color-mode="dark"]) {
	--steps-item-marker: #6e6e6e;
	--steps-item-desc: rgba(255 255 255 / 0.6);
}

.steps {
	padding: 93px 0 158px;
}

.steps__title {
	margin-bottom: 75px;
	font-family: var(--secondary-font-family);
	font-size: 52px;
	font-weight: 400;
	color: var(--font-basic);
}

.steps__list {
	position: relative;
	display: grid;
	grid-template-columns: repeat(5, 311px) auto;
	justify-content: start;
	counter-reset: list;
}

.steps__list::before {
	content: "";
	position: absolute;
	z-index: -1;
	top: 50px;
	left: 0;
	width: 100%;
	height: 1px;
	background-color: #cfd6e0;
}

.steps__item:not(:last-child) {
	padding-right: 70px;
}

.steps__item-counter {
	display: inline-block;
	margin-bottom: 14px;
}

.steps__item-counter::before {
	counter-increment: list;
	content: counter(list, decimal-leading-zero);
	font-size: 20px;
	font-weight: 400;
	color: var(--font-basic);
}

.steps__item-marker {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 25px;
	height: 25px;
	margin-bottom: 31px;
	background-color: var(--steps-item-marker);
	border-radius: 50%;
}

.steps__item-marker::before {
	content: "";
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background-color: #fee02e;
}

.steps__item-title {
	margin-bottom: 13px;
	font-size: 26px;
	font-weight: 600;
	line-height: 1.08;
	color: var(--font-basic);
}

.steps__item-desc {
	font-size: 16px;
	font-weight: 400;
	line-height: 1.5;
	color: var(--steps-item-desc);
}
</style>