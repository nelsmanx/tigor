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

<style scoped>
:global(:root) {
	--solution-inner-bg: #fee02e;
	--solution-title: #313131;
	--solution-tel: rgba(49 49 49 / 0.9);
	--solution-mail: rgba(49 49 49 / 0.8);
	--solution-info: #1c1c1c;
}

:global(:root[data-color-scheme="dark"]) {
	--solution-inner-bg: #313131;
	--solution-title: #fff;
	--solution-tel: rgba(255 255 255 / 0.9);
	--solution-mail: rgba(254 224 46 / 0.9);
	--solution-info: #fff;
}

.solution {
	margin-bottom: 78px;
}

.solution__inner {
	padding-block: 47px;
	background-color: var(--solution-inner-bg);
	border-radius: var(--section-border-radius);
}

.solution__layout {
	display: grid;
	grid-template-columns: auto 1fr auto auto;
	align-items: center;
}

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
	/* padding-bottom: 8px; */
	font-size: 14px;
	font-weight: 300;
	line-height: 1.21;
	text-align: center;
	color: var(--solution-info);
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
	width: fit-content;
	padding: 1.15em 1.65em;
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

@media (max-width: 1799.98px) {
	.solution__layout {
		grid-template-columns: none;
		grid-auto-flow: column;
		justify-content: space-between;
	}

	.solution__image,
	.solution__info {
		margin-inline: 0;
	}
}

@media (max-width: 1699.98px) {
	.solution__title {
		font-size: 42px;
	}

	.solution__contacts-tel {
		margin-right: 25px;
		font-size: 24px;
	}

	.solution__image {
		width: 210px;
	}
}

@media (max-width: 1499.98px) {
	.solution__info {
		display: none;
	}
}

@media (max-width: 1399.98px) {
	.solution__image {
		display: none;
	}
}

@media (max-width: 991.98px) {
	.solution__inner {
		padding-block: 40px;
	}

	.solution__layout {
		grid-template-areas:
			"group image"
			"button info";
		row-gap: 20px;
	}

	.solution__group {
		grid-area: group;
	}

	.solution__title {
		margin-bottom: 5px;
		font-size: 38px;
	}

	.solution__contacts-tel {
		margin-right: 20px;
		font-size: 22px;
	}

	.solution__contacts-mail {
		font-size: 16px;
		text-underline-offset: 2px;
	}

	.solution__image {
		grid-area: image;
		display: block;
	}

	.solution__info {
		grid-area: info;
		display: block;
		justify-self: center;
	}

	.solution__button {
		grid-area: button;
		font-size: 24px;
	}
}

@media (max-width: 767.98px) {
	.solution__inner {
		padding-block: 30px;
	}

	.solution__layout {
		grid-template-areas:
			"group group"
			"image info"
			"button button";
		justify-content: center;
		row-gap: 0;
	}

	.solution__group {
		margin-bottom: 20px;
	}

	.solution__title {
		font-size: var(--section-title-fz);
	}

	.solution__contacts-tel {
		font-size: 20px;
	}

	.solution__image {
		justify-self: center;
		width: 180px;
	}

	.solution__info {
		font-size: 12px;
	}

	.solution__info .hl {
		margin-bottom: 2px;
		font-size: 24px;
	}

	.solution__button {
		margin-top: 30px;
		margin-inline: auto;
		font-size: 20px;
	}
}

@media (max-width: 575.98px) {
	.solution__inner[data-v-be23d3bf] {
		padding-block: 20px;
	}

	.solution__title {
		text-align: center;
	}

	.solution__contacts-tel {
		font-size: 18px;
	}

	.solution__image {
		width: 160px;
	}

	.solution__info .hl {
		margin-bottom: 0px;
		font-size: 20px;
	}

	.solution__button {
		margin-top: 20px;
		font-size: 18px;
	}
}

@media (max-width: 379.98px) {
	.solution__contacts {
		flex-direction: column;
	}

	.solution__title[data-v-be23d3bf] {
		margin-bottom: 10px;
	}

	.solution__contacts-tel {
		margin-right: 0;
		margin-bottom: 2px;
	}

	.solution__image {
		width: 140px;
	}

	.solution__info .hl {
		font-size: 18px;
	}

	.solution__button {
		font-size: 16px;
	}
}
</style>