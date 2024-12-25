<script setup>
import ApiService from '~/services/ApiService';
const { $emitter } = useNuxtApp();

const showModal = ref(false);
$emitter.on('showModalCallbackVacancy', () => showModal.value = true);

async function sendEmail(event) {
	const api = new ApiService();
	const formData = new FormData(event.target);
	const response = await api.sendForm(formData);
	if(response) {
		showModal.value = false;
		alert('Заявка успешно отправлена!');
	}
}
</script>

<template>
	<BasicModal id="modal-callback-vacancy" v-model="showModal">
		<div class="modal__header">
			<div class="modal__logo">
				<img class="modal__logo-svg" src="/images/logo.svg" alt="Логотип компании">
			</div>
			<p v-if="false" class="modal__header-title">ТВОЯ КАРЬЕРА НАЧИНАЕТСЯ ЗДЕСЬ!</p>
			<button class="modal__button-close" data-bs-dismiss="modal" aria-label="Close"></button>
		</div>
		<div class="modal__body">
			<div class="modal__body-content">
				<p class="modal__title">Ищете персонал?</p>
				<p class="modal__desc">Заполняйте анкету и жмите «Отправить» и&nbsp;наши менеджеры свяжутся с&nbsp;Вами в&nbsp;течение 15&nbsp;минут</p>
				<form class="form modal__form" @submit.prevent="sendEmail($event)">
					<div class="form__input-group">
						<label class="form__label">
							<span class="form__label-title">Имя и Фамилия</span>
							<input class="form__input" type="text" name="name" required>
						</label>
						<label class="form__label">
							<span class="form__label-title">Номер телефона</span>
							<input v-inputmask-tel class="form__input" type="tel" name="phone" placeholder="+7 (917) --- -- -- " required>
						</label>
						<label class="form__label">
							<span class="form__label-title">Ваш город</span>
							<input class="form__input" type="text" name="city">
						</label>
						<label class="form__label">
							<span class="form__label-title">Ваш E-mail:</span>
							<input class="form__input" type="email" name="email">
						</label>
					</div>
					<div class="form__personal-data">
						<BasicCheckboxWithLabel>
							Согласие на обработку моих персональных данных
						</BasicCheckboxWithLabel>
					</div>
					<button class="form__button button-basic">Отправить заявку</button>
				</form>
			</div>
			<div class="modal__body-image-wrap">
				<img class="modal__body-image" src="/images/hero/1.jpg" alt="" aria-hidden="true">
			</div>
		</div>
	</BasicModal>
</template>


<style scoped>
:global(#modal-callback-vacancy .modal-dialog) {
	max-width: 1424px;
}

:global(#modal-callback-vacancy .modal-content) {
	--padding-left: 92px;
	--padding-right: 70px;
	padding: 55px 0 65px 0;
	border-radius: 30px;
}

:global(#modal-callback-vacancy .modal-content) {
	background-color: #fff;
}

.modal__header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: var(--padding-left);
	padding-right: var(--padding-right);
	padding-bottom: 45px;
	border-bottom: 1px solid #dcdcdc;
}

.modal__logo {
	position: relative;
	width: 172px;
}

.modal__logo-svg {
	--vertical-offset: 3px;
	position: absolute;
	top: 50%;
	left: 0;
	width: 100%;
	transform: translateY(calc(-50% - var(--vertical-offset)));
}

.modal__header-title {
	font-family: var(--secondary-font-family);
	font-size: 32px;
	font-weight: 400;
	letter-spacing: -0.01em;
	color: #2b2a29;
}

.modal__button-close {
	position: relative;
	right: -10px;
	width: 32px;
	height: 32px;
	border: none;
	background-color: transparent;
	background-size: 18px 18px;
	background-position: center;
	background-repeat: no-repeat;
	background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.4416 8.85107L17.3929 1.89981C17.8052 1.48745 17.8052 0.780544 17.3929 0.309272C16.9805 -0.103091 16.2736 -0.103091 15.8023 0.309272L8.85107 7.26053L1.89981 0.309272C1.48745 -0.103091 0.780544 -0.103091 0.309272 0.309272C-0.103091 0.721635 -0.103091 1.42854 0.309272 1.89981L7.26053 8.85107L0.309272 15.8023C-0.103091 16.2147 -0.103091 16.9216 0.309272 17.3929C0.544908 17.6285 0.780544 17.6874 1.07509 17.6874C1.36963 17.6874 1.66418 17.5696 1.84091 17.3929L8.79216 10.4416L15.7434 17.3929C15.9791 17.6285 16.2147 17.6874 16.5092 17.6874C16.8038 17.6874 17.0983 17.5696 17.2751 17.3929C17.6874 16.9805 17.6874 16.2736 17.2751 15.8023L10.3238 8.85107H10.4416Z' fill='%23C2CCCA' /%3E%3C/svg%3E");
}

.modal__body {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	padding-left: var(--padding-left);
	padding-right: var(--padding-right);
	padding-top: 45px;
}

.modal__body-content {
	padding-right: 85px;
}

.modal__title {
	margin-bottom: 24px;
	font-family: var(--secondary-font-family);
	font-size: 52px;
	font-weight: 400;
	line-height: 1;
	color: #1c1c1c;
}

.modal__desc {
	margin-bottom: 47px;
	font-size: 22px;
	font-weight: 400;
	line-height: 1.5;
	color: #080a05;
}

.modal__form {}

.form {}

.form__input-group {
	display: grid;
	gap: 35px;
	margin-bottom: 35px;
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

.form__input {
	width: 100%;
	padding: 8px 0;
	font-size: 24px;
	font-weight: 400;
	color: #090c05;
	background-color: transparent;
	border: none;
	border-bottom: 1px solid #dcdcdc;
}

.form__input::placeholder {
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
	margin-bottom: 45px;
}

:global(#modal-callback-vacancy .checkbox__label-title) {
	font-size: 14px;
	color: #282828;
}

:global(#modal-callback-vacancy .checkbox__style) {
	border-color: #d8a534;
}

:global(#modal-callback-vacancy .checkbox__default-input:checked + .checkbox__style::before) {
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11.01 8.22'%3E%3Cpath fill='%23d8a534' d='M3.86,8.22A1,1,0,0,1,3.12,8L.3,5.13a1,1,0,0,1,0-1.41,1,1,0,0,1,1.41,0L3.79,5.81,9.3.3a1,1,0,0,1,1.4,0,1,1,0,0,1,0,1.41L4.46,8a1,1,0,0,1-.74.27Z' /%3E%3C/svg%3E");
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
	border-radius: 40px;
	box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
}

.modal__body-image-wrap {
	position: relative;
	margin-left: 10px;
	border-radius: 40px;
	overflow: hidden;
}

.modal__body-image-wrap::before {
	content: "";
	position: absolute;
	inset: 0;
	z-index: 2;
	width: 100%;
	height: 100%;
	background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%);
	opacity: 0.2;
}

.modal__body-image {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
}

@media (max-width: 1499.98px) {
	:global(#modal-callback-vacancy .modal-dialog) {
		max-width: 1100px;
	}

	:global(#modal-callback-vacancy .modal-content) {
		--padding-left: 60px;
		--padding-right: 60px;
		padding: 50px 0 60px 0;
	}

	.modal__header-title {
		font-size: 28px;
	}

	.modal__body {
		grid-template-columns: 430px 1fr;
	}

	.modal__body-content {
		padding-right: 60px;
	}

	.modal__title {
		font-size: 42px;
	}

	.modal__desc {
		font-size: 20px;
	}

	.modal__body-image-wrap {
		margin-left: 0;
	}

	.form__button {
		height: 65px;
		font-size: 20px;
		border-radius: 22px;
	}
}

@media (max-width: 1199.98px) {
	:global(#modal-callback-vacancy .modal-dialog) {
		max-width: 600px;
	}

	.modal__header {
		display: grid;
		grid-template-areas:
			"logo button";
		/* "title title"; */
		grid-template-columns: 1fr auto;
		padding-bottom: 20px;
	}

	.modal__logo {
		grid-area: logo;
		width: 150px;
	}

	.modal__header-title {
		grid-area: title;
		margin-top: 30px;
		font-size: 22px;
	}

	.modal__header-button-close {
		grid-area: button;
	}

	.modal__body {
		grid-template-columns: 100%;
	}

	.modal__body-image-wrap {
		display: none;
	}

	.modal__body-content {
		padding-right: 0;
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
	:global(#modal-callback-vacancy .modal-dialog) {
		max-width: 500px;
	}

	:global(#modal-callback-vacancy .modal-content) {
		--padding: 50px;
		padding-block: var(--padding);
	}

	.modal__header {
		padding-bottom: 20px;
		padding-inline: var(--padding);
	}

	.modal__logo {
		width: 120px;
	}

	.modal__header-title {
		margin-top: 20px;
		font-size: 18px;
	}

	.modal__body {
		padding-inline: var(--padding);
		padding-top: 30px;
	}

	.modal__title {
		font-size: var(--section-title-fz);
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
	:global(#modal-callback-vacancy .modal-dialog) {
		max-width: 450px;
	}

	:global(#modal-callback-vacancy .modal-content) {
		--padding: 40px;
	}

	.modal__header-title {
		margin-top: 15px;
		font-size: 16px;
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
	:global(#modal-callback-vacancy .modal-content) {
		--padding: 35px;
	}

	.modal__header {
		padding-bottom: 15px;
	}

	.modal__logo {
		width: 100px;
	}

	.modal__header-title {
		margin-top: 10px;
		font-size: 14px;
	}

	:global(#modal-callback-vacancy .checkbox__label-title) {
		font-size: 14px;
	}

	:global(#modal-callback-vacancy .checkbox__style-wrap) {
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
	:global(#modal-callback-vacancy .modal-content) {
		--padding: 30px;
	}

	.modal__body {
		padding-top: 25px;
	}

	.modal__header {
		padding-bottom: 12px;
	}

	.modal__logo {
		width: 90px;
	}

	.modal__header-title {
		font-size: 12px;
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

	:global(#modal-callback-vacancy .checkbox__label-title) {
		font-size: 12px;
	}

	:global(#modal-callback-vacancy .checkbox__label) {
		line-height: 1;
	}

	.form__button {
		height: 50px;
		font-size: 16px;
	}
}
</style>