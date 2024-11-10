<script setup></script>

<template>
	<section class="solution section-island">
		<div class="solution__inner">
			<div class="container">
				<div class="solution__layout">
					<div class="solution__group">
						<h2 class="solution__title">Подобрать решение?</h2>
						<div class="solution__contacts">
							<a class="solution__contacts-tel" href="tel:+79000000000">+7 (900) 000 00 00</a>
							<a class="solution__contacts-mail" href="mailto:info@tigor.pro">info@tigor.pro</a>
						</div>
					</div>
					<img class="solution__image" src="/images/deliverymen.png" alt="" aria-hidden="true">
					<p class="solution__info">
						<span class="hl">>10&nbsp;000</span>
						Действующих сотрудников
					</p>
					<button class="solution__button">Индивидуальный подбор</button>

				</div>
			</div>
		</div>
	</section>
</template>

<style>
:root {
	--solution-inner-bg: #fee02e;
	--solution-title: #313131;
	--solution-tel: rgba(49 49 49 / 0.9);
	--solution-mail: rgba(49 49 49 / 0.8);
	--solution-info: #1c1c1c;
}

:root[data-color-mode="dark"] {
	--solution-inner-bg: #313131;
	--solution-title: #fff;
	--solution-tel: rgba(255 255 255 / 0.9);
	--solution-mail: rgba(254 224 46 / 0.9);
	--solution-info: #fff;
}
</style>
<style scoped>
.solution {
	margin-bottom: 78px;
}

.solution__inner {
	padding-block: 47px;
	background-color: var(--solution-inner-bg);
	border-radius: 50px;
}

.solution__layout {
	display: flex;
	align-items: center;
}

.solution__group {}

.solution__title {
	margin-bottom: 9px;
	font-family: var(--secondary-font-family);
	font-size: 52px;
	font-weight: 400;
	color: var(--solution-title);
}

.solution__contacts {
	display: flex;
	align-items: center;
}

.solution__contacts-tel {
	margin-right: 30px;
	font-size: 28px;
	font-weight: 600;
	letter-spacing: 0.02em;
	color: var(--solution-tel);
}

.solution__contacts-mail {
	font-size: 18px;
	font-weight: 500;
	letter-spacing: 0.02em;
	text-decoration: underline;
	text-decoration-color: var(--solution-mail);
	text-decoration-thickness: 1px;
	text-underline-offset: 3px;
	text-decoration-skip-ink: none;
	color: var(--solution-mail);
}

.solution__image {
	display: block;
	width: 254px;
	margin-left: auto;
	margin-right: 70px;
}

.solution__info {
	width: min-content;
	margin-right: 89px;
	font-size: 14px;
	font-weight: 300;
	line-height: 1.21;
	text-align: center;
	color: var(--solution-info);
	padding-bottom: 8px;
}

.solution__info .hl {
	display: block;
	margin-bottom: 4px;
	font-size: 28px;
	font-weight: 600;
}

.solution__button {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
	width: 435px;
	height: 97px;
	font-family: var(--secondary-font-family);
	font-size: 28px;
	font-weight: 400;
	color: #1c1c1c;
	background-color: #fff;
	border: none;
	border-radius: 16px;
	box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
	cursor: pointer;
}
</style>