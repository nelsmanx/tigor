<script setup>
defineProps({
	hasDarkColorScheme: {
		type: Boolean,
	}
});
</script>

<template>
	<section class="cta section-island" :class="{ 'cta--dark': hasDarkColorScheme }">
		<div class="cta__inner">
			<div class="container">
				<div class="cta__layout">
					<div class="cta__content">
						<template v-if="!hasDarkColorScheme">
							<h2 class="cta__title">Ищешь работу?<br /> Тогда тебе к нам!</h2>
							<p class="cta__desc">Заполняй анкету и жми «Отправить».<br /> Наши заботливые менеджеры свяжутся с Вами в течение 15 минут</p>
						</template>
						<template v-else>
							<h2 class="cta__title cta__title--dark">Нужны услуги&nbsp;по предоставлению персонала?</h2>
							<p class="cta__desc cta__desc--dark">Заполните форму ниже. Мы свяжемся с вами, чтобы уточнить все детали и сформировать лучшее предложение.</p>
						</template>

						<div v-if="hasDarkColorScheme" class="cta__group">
							<img class="cta__group-image" src="/images/deliverymen.png" alt="" aria-hidden="true">
							<div class="cta__group-contacts">
								<a class="cta__group-contacts-tel cta__group-contacts-tel--dark" href="tel:+79000000000">+7 (900) 000 00 00</a>
								<a class="cta__group-contacts-mail cta__group-contacts-mail--dark" href="mailto:info@tigor.pro">info@tigor.pro</a>
							</div>
						</div>
					</div>
					<div class="form cta__form">
						<div class="form__input-group">
							<label class="form__label form__label--name">
								<span class="form__label-title">Ваше имя</span>
								<input class="form__input" type="text" name="name">
							</label>
							<label class="form__label form__label--city">
								<span class="form__label-title">Ваш город</span>
								<input class="form__input" type="text" name="city">
							</label>
							<label class="form__label form__label--tel">
								<span class="form__label-title">Номер телефона</span>
								<input v-inputmask-tel class="form__input" type="tel" name="tel">
							</label>
							<label class="form__label form__label--mail">
								<span class="form__label-title">Ваш E-mail:</span>
								<input class="form__input" type="email" name="mail">
							</label>
						</div>
						<div class="form__personal-data">
							<BasicCheckboxWithLabel>
								Отправляя заявку, вы соглашаетесь с условиями обработки данных
							</BasicCheckboxWithLabel>
						</div>
						<button class="form__button">Отправить анкету</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
:global(:root) {
	--cta-dark-inner: #fee02e;
	--cta-dark-contacts-tel: rgba(49 49 49 / 0.9);
	--cta-dark-contacts-mail: rgba(49 49 49 / 0.9);
	--cta-dark-form-label-title: #1c1c1c;
	--cta-dark-form-input: #1c1c1c;
	--cta-dark-form-button-bg: #fff;
	--cta-dark-checkbox-style: #1c1c1c;
}

:global(:root[data-color-scheme="dark"]) {
	--cta-dark-inner: #313131;
	--cta-dark-contacts-tel: rgba(255 255 255 / 0.9);
	--cta-dark-contacts-mail: rgba(254 224 46 / 0.9);
	--cta-dark-form-label-title: #fff;
	--cta-dark-form-input: #fff;
	--cta-dark-form-button-bg: #fde241;
	--cta-dark-checkbox-style: #fff;
}

.cta--dark {
	margin-bottom: 80px;
}

.cta__inner {
	padding: 63px 0;
	border-radius: 50px;
	background-color: #fee02e;
}

.cta--dark .cta__inner {
	background-color: var(--cta-dark-inner);
}

.cta__layout {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;
}

.cta__content {
	margin-right: 90px;
}

.cta__content {
	max-width: 490px;
}

.cta--dark .cta__content {
	max-width: none;
}

.cta__title {
	margin-bottom: 25px;
	font-family: var(--secondary-font-family);
	font-size: 52px;
	font-weight: 400;
	color: #1c1c1c;
}

.cta--dark .cta__title {
	color: var(--font-basic)
}

.cta__desc {
	font-size: 24px;
	font-weight: 400;
	line-height: 1.54;
	color: #1c1c1c;
}

.cta--dark .cta__desc {
	color: var(--font-basic)
}

.cta__group {
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: start;
	gap: 28px;
	margin-top: 70px;
}

.cta__group-image {
	width: 228px;
}

.cta__group-contacts {}

.cta__group-contacts-tel {
	display: block;
	width: fit-content;
	margin-bottom: 12px;
	font-size: 28px;
	font-weight: 600;
	letter-spacing: 0.02em;
	color: rgba(28 28 28 /0.9);
}

.cta--dark .cta__group-contacts-tel {
	color: var(--cta-dark-contacts-tel)
}

.cta__group-contacts-mail {
	display: block;
	width: fit-content;
	font-weight: 500;
	font-size: 18px;
	letter-spacing: 0.02em;
	text-decoration: underline;
	text-decoration-color: rgba(28 28 28 /0.9);
	text-decoration-thickness: 1px;
	text-underline-offset: 3px;
	text-decoration-skip-ink: none;
	color: rgba(28 28 28 /0.9);
}

.cta--dark .cta__group-contacts-mail {
	text-decoration-color: var(--cta-dark-contacts-mail);
	color: var(--cta-dark-contacts-mail);
}

.cta__form {
	padding-top: 15px;
}

.form {}

.form__input-group {
	display: grid;
	grid-template-areas:
		"name tel"
		"city mail";
	grid-template-columns: repeat(2, 1fr);
	column-gap: 76px;
	row-gap: 52px;
	margin-bottom: 37px;
	padding-right: 50px;
}

.form__label {
	display: block;
}

.form__label--name {
	grid-area: name;
}

.form__label--tel {
	grid-area: tel;
}

.form__label--city {
	grid-area: city;
}

.form__label--mail {
	grid-area: mail;
}

.form__label-title {
	display: block;
	font-size: 16px;
	font-weight: 400;
	color: #1c1c1c;
}

.cta--dark .form__label-title {
	color: var(--cta-dark-form-label-title);
}

.form__input {
	width: 100%;
	padding: 8px 0;
	font-size: 24px;
	font-weight: 400;
	color: #1c1c1c;
	background-color: transparent;
	border: none;
	border-bottom: 1px solid #1c1c1c;
}

.cta--dark .form__input {
	color: var(--cta-dark-form-input);
	border-color: var(--cta-dark-form-input);
}

.form__input:-webkit-autofill,
.form__input:-webkit-autofill:hover,
.form__input:-webkit-autofill:focus,
.form__input:-webkit-autofill:active {
	-webkit-background-clip: text;
	-webkit-text-fill-color: #1c1c1c;
	transition: background-color 5000s ease-in-out 0s;
	box-shadow: inset 0 0 20px 20px transparent;
}

.form__input:focus-visible {
	outline: none;
}

.form__personal-data {
	margin-bottom: 32px;
}

.form__button {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 86px;
	padding: 8px;
	font-family: var(--secondary-font-family);
	font-weight: 400;
	font-size: 28px;
	color: #1c1c1c;
	background-color: #fff;
	border: none;
	border-radius: 16px;
	box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
	cursor: pointer;
}

.cta--dark .form__button {
	background-color: var(--cta-dark-form-button-bg);
}

.cta--dark:deep(.checkbox__label-title) {
	color: var(--font-basic);
}

.cta--dark:deep(.checkbox__style) {
	border-color: var(--cta-dark-checkbox-style)
}

.cta--dark:deep(.checkbox__default-input:checked + .checkbox__style::before) {
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11.01 8.22'%3E%3Cpath fill='%23ffffff' d='M3.86,8.22A1,1,0,0,1,3.12,8L.3,5.13a1,1,0,0,1,0-1.41,1,1,0,0,1,1.41,0L3.79,5.81,9.3.3a1,1,0,0,1,1.4,0,1,1,0,0,1,0,1.41L4.46,8a1,1,0,0,1-.74.27Z' /%3E%3C/svg%3E");
}
</style>