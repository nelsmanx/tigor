<script setup></script>

<template>
	<div class="form">
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
				<input class="form__input" type="tel" name="tel">
			</label>
			<label class="form__label form__label--mail">
				<span class="form__label-title">Ваш E-mail:</span>
				<input class="form__input" type="email" name="mail">
			</label>
		</div>
		<div class="form__personal-data">
			<BasicCheckboxWithLabel>Отправляя заявку, вы соглашаетесь с условиями обработки данных</BasicCheckboxWithLabel>
		</div>
		<button class="form__button">Отправить анкету</button>
	</div>
</template>

<style scoped>
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

.form__label-title--cta-dark {
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

.form__input--cta-dark {
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

.form__button--cta-dark {
	background-color: var(--cta-dark-form-button-bg);
}

html[data-color-mode="dark"] .mod-checkbox__default-input:checked + .mod-checkbox__style--cta-dark::before {
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11.01 8.22'%3E%3Cpath fill='%23ffffff' d='M3.86,8.22A1,1,0,0,1,3.12,8L.3,5.13a1,1,0,0,1,0-1.41,1,1,0,0,1,1.41,0L3.79,5.81,9.3.3a1,1,0,0,1,1.4,0,1,1,0,0,1,0,1.41L4.46,8a1,1,0,0,1-.74.27Z' /%3E%3C/svg%3E");
}
</style>