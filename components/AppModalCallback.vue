<script setup>
const props = defineProps({
	altColorScheme: {
		type: Boolean,
	}
});

const modalId = props.altColorScheme ? 'modal-callback-alt' : 'modal-callback';
</script>

<template>
	<BasicModal :id="modalId">
		<div class="modal__header">
			<div class="modal__logo">
				<BasicLogoSvg v-if="!altColorScheme" class="modal__logo-svg" />
				<img v-else class="modal__logo-svg" src="/images/logo-alt.svg" alt="Логотип компании">
			</div>
			<p class="modal__company-desc">Аутсорс и&nbsp;аутстафф<br />линейного персонала</p>
			<button class="modal__button-close" data-bs-dismiss="modal" aria-label="Close"></button>
		</div>
		<div class="modal__body">
			<p class="modal__title">Нужны услуги по&nbsp;предоставлению персонала?</p>
			<p class="modal__desc">Заполняй анкету и жми «Отправить» и&nbsp;наши менеджеры свяжутся с Вами в течение 15&nbsp;минут</p>
			<form class="form modal__form">
				<div class="form__input-group">
					<label class="form__label">
						<span class="form__label-title">Имя и Фамилия</span>
						<input class="form__input" type="text" name="name" required>
					</label>
					<label class="form__label">
						<span class="form__label-title">Номер телефона</span>
						<input v-inputmask-tel class="form__input" type="tel" name="tel" placeholder="+7 (917) --- -- -- " required>
					</label>
				</div>
				<div class="form__personal-data">
					<BasicCheckboxWithLabel>
						Согласие на обработку моих персональных данных
					</BasicCheckboxWithLabel>
				</div>
				<button class="form__button">Отправить заявку</button>
			</form>
		</div>
	</BasicModal>
</template>

<style scoped>
:global(:root) {
	--modal-content-bg: #fff;
	--modal-company-desc: rgba(28 28 28 / 0.9);
	--modal-desc: #080a05;
	--form-label-title: #d8a534;
	--form-input-placeholder: rgba(9 12 5 / 0.5);
	--checkbox-label-title: #282828;
}

:global(:root[data-color-scheme="dark"]) {
	--modal-content-bg: #313131;
	--modal-company-desc: rgba(255 255 255 / 0.9);
	--modal-desc: #fff;
	--form-label-title: #fee02e;
	--form-input-placeholder: rgba(255 255 255 / 0.5);
	--checkbox-label-title: #fff;
}

:global(#modal-callback .modal-dialog),
:global(#modal-callback-alt .modal-dialog) {
	max-width: 683px;
}

:global(#modal-callback .modal-content),
:global(#modal-callback-alt .modal-content) {
	padding: 60px 70px 65px 60px;
	border-radius: 30px;
}

:global(#modal-callback .modal-content) {
	background-color: var(--modal-content-bg);
}

:global(#modal-callback-alt .modal-content) {
	background-color: #fee02e;
}

.modal__header {
	display: flex;
	align-items: center;
	padding-bottom: 45px;
	border-bottom: 1px solid #dcdcdc;
}

#modal-callback-alt .modal__header {
	border-color: #1c1c1c;
}

.modal__logo {
	position: relative;
	width: 136px;
	margin-right: 50px;
}

.modal__logo-svg {
	--vertical-offset: 3px;
	position: absolute;
	top: 50%;
	left: 0;
	width: 100%;
	transform: translateY(calc(-50% - var(--vertical-offset)));
}

.modal__company-desc {
	font-size: 13px;
	font-weight: 400;
	line-height: 1.2;
	text-align: center;
	color: var(--modal-company-desc);
}

#modal-callback-alt .modal__company-desc {
	color: rgba(28 28 28 /0.9);
}

.modal__button-close {
	position: relative;
	right: -10px;
	width: 32px;
	height: 32px;
	margin-left: auto;
	border: none;
	background-color: transparent;
	background-size: 18px 18px;
	background-position: center;
	background-repeat: no-repeat;
	background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.4416 8.85107L17.3929 1.89981C17.8052 1.48745 17.8052 0.780544 17.3929 0.309272C16.9805 -0.103091 16.2736 -0.103091 15.8023 0.309272L8.85107 7.26053L1.89981 0.309272C1.48745 -0.103091 0.780544 -0.103091 0.309272 0.309272C-0.103091 0.721635 -0.103091 1.42854 0.309272 1.89981L7.26053 8.85107L0.309272 15.8023C-0.103091 16.2147 -0.103091 16.9216 0.309272 17.3929C0.544908 17.6285 0.780544 17.6874 1.07509 17.6874C1.36963 17.6874 1.66418 17.5696 1.84091 17.3929L8.79216 10.4416L15.7434 17.3929C15.9791 17.6285 16.2147 17.6874 16.5092 17.6874C16.8038 17.6874 17.0983 17.5696 17.2751 17.3929C17.6874 16.9805 17.6874 16.2736 17.2751 15.8023L10.3238 8.85107H10.4416Z' fill='%23C2CCCA' /%3E%3C/svg%3E");
}

#modal-callback-alt .modal__button-close {
	background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.4416 8.85107L17.3929 1.89981C17.8052 1.48745 17.8052 0.780544 17.3929 0.309272C16.9805 -0.103091 16.2736 -0.103091 15.8023 0.309272L8.85107 7.26053L1.89981 0.309272C1.48745 -0.103091 0.780544 -0.103091 0.309272 0.309272C-0.103091 0.721635 -0.103091 1.42854 0.309272 1.89981L7.26053 8.85107L0.309272 15.8023C-0.103091 16.2147 -0.103091 16.9216 0.309272 17.3929C0.544908 17.6285 0.780544 17.6874 1.07509 17.6874C1.36963 17.6874 1.66418 17.5696 1.84091 17.3929L8.79216 10.4416L15.7434 17.3929C15.9791 17.6285 16.2147 17.6874 16.5092 17.6874C16.8038 17.6874 17.0983 17.5696 17.2751 17.3929C17.6874 16.9805 17.6874 16.2736 17.2751 15.8023L10.3238 8.85107H10.4416Z' fill='%231C1C1C' /%3E%3C/svg%3E");
}

.modal__body {
	padding-top: 38px;
}

.modal__title {
	margin-bottom: 17px;
	font-family: var(--secondary-font-family);
	font-size: var(--section-title-fz);
	font-weight: 400;
	line-height: 1;
	color: var(--font-basic);
}

#modal-callback-alt .modal__title {
	color: #1c1c1c
}

.modal__desc {
	margin-bottom: 42px;
	font-size: 22px;
	font-weight: 400;
	line-height: 1.36;
	color: var(--modal-desc);
}

#modal-callback-alt .modal__desc {
	color: #1c1c1c
}

.modal__form {}

.form {}

.form__input-group {
	display: grid;
	gap: 32px;
	margin-bottom: 24px;
}

.form__label {
	display: block;
}

.form__label-title {
	display: block;
	font-size: 16px;
	font-weight: 400;
	color: #d8a534;
}

#modal-callback-alt .form__label-title {
	color: #1c1c1c
}

.form__input {
	width: 100%;
	padding: 4px 0;
	font-size: 24px;
	font-weight: 400;
	color: var(--font-basic);
	background-color: transparent;
	border: none;
	border-bottom: 1px solid #dcdcdc;
}

#modal-callback-alt .form__input {
	color: #1c1c1c;
	border-color: #1c1c1c;
}

.form__input::placeholder {
	color: var(--form-input-placeholder)
}

#modal-callback-alt .form__input::placeholder {
	color: rgba(28 28 28 /0.5);
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
	margin-bottom: 62px;
}

:global(#modal-callback .checkbox__label-title) {
	font-size: 14px;
	color: var(--checkbox-label-title);
}

:global(#modal-callback-alt .checkbox__label-title) {
	color: #1c1c1c
}

:global(#modal-callback .checkbox__style) {
	border-color: #d8a534;
}

:global(#modal-callback-alt .checkbox__style) {
	border-color: #1c1c1c
}

:global(#modal-callback .checkbox__default-input:checked + .checkbox__style::before) {
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11.01 8.22'%3E%3Cpath fill='%23d8a534' d='M3.86,8.22A1,1,0,0,1,3.12,8L.3,5.13a1,1,0,0,1,0-1.41,1,1,0,0,1,1.41,0L3.79,5.81,9.3.3a1,1,0,0,1,1.4,0,1,1,0,0,1,0,1.41L4.46,8a1,1,0,0,1-.74.27Z' /%3E%3C/svg%3E");
}

:global(#modal-callback-alt .checkbox__default-input:checked + .checkbox__style::before) {
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11.01 8.22'%3E%3Cpath fill='%231c1c1c' d='M3.86,8.22A1,1,0,0,1,3.12,8L.3,5.13a1,1,0,0,1,0-1.41,1,1,0,0,1,1.41,0L3.79,5.81,9.3.3a1,1,0,0,1,1.4,0,1,1,0,0,1,0,1.41L4.46,8a1,1,0,0,1-.74.27Z' /%3E%3C/svg%3E");
}

.form__button {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 80px;
	padding: 8px;
	font-weight: 500;
	font-size: 24px;
	color: #1c1c1c;
	background-color: #fee02e;
	border: none;
	border-radius: 40px;
	box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
	cursor: pointer;
}

#modal-callback-alt .form__button {
	background-color: #fff;
}

@media (max-width: 1399.98px) {

	:global(#modal-callback .modal-dialog),
	:global(#modal-callback-alt .modal-dialog) {
		max-width: 600px;
	}

	.modal__desc {
		font-size: 20px;
	}

	.form__input {
		font-size: 22px;
	}

	.form__button {
		height: 80px;
		font-size: 24px;
		border-radius: 30px;
	}
}

@media (max-width: 991.98px) {

	:global(#modal-callback .modal-dialog),
	:global(#modal-callback-alt .modal-dialog) {
		max-width: 500px;
	}

	:global(#modal-callback .modal-content),
	:global(#modal-callback-alt .modal-content) {
		padding: 50px;
	}

	.modal__header {
		justify-content: space-between;
		padding-bottom: 30px;
	}

	.modal__logo {
		width: 120px;
		margin-right: 0;
	}

	.modal__button-close {
		margin-left: 0;
	}

	.modal__body {
		padding-top: 30px;
	}

	.modal__company-desc {
		font-size: 12px;
	}

	.modal__desc {
		margin-bottom: 30px;
		font-size: 18px;
	}

	.form__input {
		font-size: 20px;
	}

	.form__personal-data {
		margin-bottom: 50px;
	}

	.form__button {
		height: 70px;
		font-size: 22px;
	}
}

@media (max-width: 767.98px) {

	:global(#modal-callback .modal-dialog),
	:global(#modal-callback-alt .modal-dialog) {
		max-width: 450px;
	}

	:global(#modal-callback .modal-content),
	:global(#modal-callback-alt .modal-content) {
		padding: 40px;
	}

	.modal__desc {
		font-size: 16px;
	}

	.form__input-group {
		gap: 25px;
		margin-bottom: 20px;
	}

	.form__label-title {
		font-size: 14px;
	}

	.form__input {
		padding: 6px 0;
		font-size: 18px;
	}

	.form__personal-data {
		margin-bottom: 40px;
	}

	.form__button {
		height: 65px;
		font-size: 20px;
		border-radius: 22px;
	}
}

@media (max-width: 575.98px) {

	:global(#modal-callback .modal-content),
	:global(#modal-callback-alt .modal-content) {
		padding: 35px;
	}

	.modal__header {
		padding-bottom: 20px;
	}

	.modal__logo {
		width: 100px;
	}

	:global(#modal-callback-alt .checkbox__label-title),
	:global(#modal-callback .checkbox__label-title) {
		font-size: 14px;
	}

	:global(#modal-callback-alt .checkbox__style-wrap),
	:global(#modal-callback .checkbox__style-wrap) {
		top: 1px;
		margin-right: 1px;
	}
}

@media (max-width: 479.98px) {
	.form__button {
		height: 60px;
		font-size: 18px;
	}
}

@media (max-width: 379.98px) {

	:global(#modal-callback .modal-content),
	:global(#modal-callback-alt .modal-content) {
		padding: 30px;
	}

	.modal__body[data-v-0594bcb9] {
		padding-top: 25px;
	}

	.modal__header {
		padding-bottom: 12px;
	}

	.modal__logo {
		width: 90px;
	}

	.modal__company-desc {
		display: none;
	}

	.modal__button-close {
		width: 28px;
		height: 28px;
		background-size: 16px 16px;
	}

	.modal__desc {
		margin-bottom: 20px;
		font-size: 14px;
	}

	.form__input-group {
		gap: 20px;
	}

	.form__input {
		padding: 4px 0;
		font-size: 16px;
	}

	.form__personal-data {
		margin-bottom: 30px;
	}

	:global(#modal-callback-alt .checkbox__label-title),
	:global(#modal-callback .checkbox__label-title) {
		font-size: 12px;
	}

	:global(#modal-callback-alt .checkbox__label),
	:global(#modal-callback .checkbox__label) {
		line-height: 1;
	}

	.form__button {
		height: 50px;
		font-size: 16px;
	}
}
</style>