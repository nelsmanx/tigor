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

:global(:root[data-color-scheme="dark"]) {
	--steps-item-marker: #6e6e6e;
	--steps-item-desc: rgba(255 255 255 / 0.6);
}

.steps {
	padding: 93px 0 158px;
}

.steps__title {
	margin-bottom: 75px;
	font-family: var(--secondary-font-family);
	font-size: var(--section-title-fz);
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
	--scale: 1;
	width: calc(25px * var(--scale));
	height: calc(25px * var(--scale));
	margin-bottom: 31px;
	background-color: var(--steps-item-marker);
	border-radius: 50%;
}

.steps__item-marker::before {
	content: "";
	width: calc(15px * var(--scale));
	height: calc(15px * var(--scale));
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

@media (max-width: 1899.98px) {
	.steps__list {
		grid-template-columns: 250px 200px 250px 280px 280px 200px;
		justify-content: space-between;
	}

	.steps__item:not(:last-child) {
		padding-right: 50px;
	}

	.steps__item-title {
		font-size: 24px;
	}
}

@media (max-width: 1599.98px) {
	.steps__list {
		grid-template-columns: 250px 200px 220px 280px 280px 120px;
	}
}

@media (max-width: 1399.98px) {
	.steps__title {
		margin-bottom: 60px;
	}

	.steps__list {
		grid-template-columns: 100%;
		gap: 30px;
	}

	.steps__list::before {
		top: 2px;
		left: 0;
		width: 1px;
		height: 100%;
	}

	.steps__item:not(:last-child) {
		padding-right: 0;
	}

	.steps__item {
		position: relative;
		padding-left: 20px;
	}

	.steps__item-title {
		margin-bottom: 8px;
	}

	.steps__item-title::before {
		counter-increment: list;
		content: counter(list, decimal-leading-zero) ". ";
		font-size: 20px;
		font-weight: 400;
		color: var(--font-basic);
	}

	.steps__item-counter {
		display: none;
	}

	.steps__item-marker {
		position: absolute;
		top: 2px;
		left: -12px;
		margin-bottom: 0;
	}
}

@media (max-width: 991.98px) {
	.steps {
		padding: var(--section-space) calc(1.3 * var(--section-space));
	}

	.steps__title {
		margin-bottom: 50px;
	}

	.steps__list {
		gap: 25px;
	}

	.steps__list::before {
		top: 4px;
	}

	.steps__item-marker {
		--scale: 0.8;
		top: 3px;
		left: -9px;
	}

	.steps__item-title {
		margin-bottom: 2px;
		font-size: 22px;
	}

	.steps__item-title::before {
		font-size: 18px;
	}
}

@media (max-width: 767.98px) {
	.steps__title {
		margin-bottom: 40px;
	}

	.steps__item-marker {
		--scale: 0.7;
		top: 2px;
	}

	.steps__item-title {
		font-size: 20px;
	}

	.steps__item-title::before {
		font-size: 16px;
	}

	.steps__item-desc {
		font-size: 14px;
	}
}

@media (max-width: 575.98px) {
	.steps__title {
		margin-bottom: 30px;
	}

	.steps__item-title {
		font-size: 18px;
	}
}
</style>