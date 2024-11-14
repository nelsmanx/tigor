<script setup>
const { $bootstrap } = useNuxtApp();
const mobileMenu = ref(null);

const closeMobileMenu = (link) => {
	mobileMenu.value.addEventListener("hidden.bs.offcanvas", () => {
		navigateTo(link, { scrollBehavior: "smooth" });
	});

	$bootstrap.Offcanvas.getOrCreateInstance(mobileMenu.value).hide();
};

const openModal = (modal) => {
	mobileMenu.value.addEventListener("hidden.bs.offcanvas", () => {
		const targetModal = $bootstrap.Modal.getOrCreateInstance(modal);
		targetModal.show();
	}, { once: true });

	$bootstrap.Offcanvas.getOrCreateInstance(mobileMenu.value).hide();
};
</script>

<template>
	<div ref="mobileMenu" id="mobile-menu" class="mobile-menu offcanvas offcanvas-start" tabindex="-1">
		<div class="mobile-menu__inner">
			<button class="mobile-menu__button-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

			<div class="mobile-menu__links">
				<ul class="mobile-menu__links-list">
					<li class="mobile-menu__links-item">
						<a class="mobile-menu__link" href="">О нас</a>
					</li>
					<li class="mobile-menu__links-item">
						<a class="mobile-menu__link" href="">Услуги</a>
					</li>
					<li class="mobile-menu__links-item">
						<a class="mobile-menu__link" href="">Отзывы</a>
					</li>
					<li class="mobile-menu__links-item">
						<a class="mobile-menu__link" href="#contacts" @click.prevent="closeMobileMenu('#contacts')">Контакты</a>
					</li>
				</ul>
			</div>


			<div class="mobile-menu__actions">
				<button class="mobile-menu__button mobile-menu__button--1" @click="openModal('#modal-callback')">Для заказчиков</button>
				<button class="mobile-menu__button mobile-menu__button--2 button-basic" @click="openModal('#modal-callback-alt')">Ищу работу</button>
			</div>

			<div class="mobile-menu__contacts">
				<a class="mobile-menu__contacts-tel" href="tel:+79000000000">+7 (900) 000 00 00</a>
				<a class="mobile-menu__contacts-mail" href="mailto:info@tigor.pro">info@tigor.pro</a>
			</div>

			<BasicSocials class="mobile-menu__socials" />

			<button class="mobile-menu__button mobile-menu__button--3" data-bs-toggle="modal" data-bs-target="#modal-callback">Задать вопрос</button>
		</div>
	</div>
</template>

<style scoped>
.mobile-menu {
	max-width: 300px;
	padding: 16px 8px 40px 30px;
}

.mobile-menu__inner {
	display: grid;
	height: 100%;
	padding-right: 22px;
	overflow-y: auto;
}

.mobile-menu__button-close {
	position: relative;
	right: -20px;
	display: block;
	width: 32px;
	height: 32px;
	margin-left: auto;
	margin-bottom: 60px;
	background-color: transparent;
	background-size: 14px 14px;
	background-position: center;
	background-repeat: no-repeat;
	background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.2579 7.00583L13.7554 1.50375C14.0815 1.17735 14.0815 0.617818 13.7554 0.244796C13.4293 -0.0815987 12.8702 -0.0815987 12.4975 0.244796L7 5.74688L1.5025 0.244796C1.17637 -0.0815987 0.617305 -0.0815987 0.244592 0.244796C-0.0815308 0.571191 -0.0815308 1.13072 0.244592 1.50375L5.7421 7.00583L0.244592 12.5079C-0.0815308 12.8343 -0.0815308 13.3938 0.244592 13.7669C0.430948 13.9534 0.617305 14 0.85025 14C1.08319 14 1.31614 13.9067 1.45591 13.7669L6.95341 8.26478L12.4509 13.7669C12.6373 13.9534 12.8236 14 13.0566 14C13.2895 14 13.5225 13.9067 13.6622 13.7669C13.9884 13.4405 13.9884 12.8809 13.6622 12.5079L8.16473 7.00583H8.2579Z' fill='%23313131' /%3E%3C/svg%3E");
	border: none;
}

.mobile-menu__links {
	margin-bottom: 78px;
}

.mobile-menu__links-list {
	display: grid;
	gap: 43px;
	justify-content: center;
}

.mobile-menu__links-item {}

.mobile-menu__link {
	display: block;
	font-size: 18px;
	font-weight: 500;
	letter-spacing: 0.02em;
	text-align: center;
	color: #1c1c1c;
}

.mobile-menu__actions {
	margin-bottom: 53px;
}

.mobile-menu__button {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 54px;
	font-weight: 500;
	font-size: 14px;
	white-space: nowrap;
	border-radius: 40px;
	box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
	cursor: pointer;
}

.mobile-menu__button--1 {
	margin-bottom: 13px;
	color: #1c1c1c;
	background-color: transparent;
}

.mobile-menu__button--2 {
	color: #2b2a29;
}

.mobile-menu__contacts {
	margin-bottom: 43px;
}

.mobile-menu__contacts-tel {
	display: block;
	width: fit-content;
	margin-inline: auto;
	margin-bottom: 14px;
	font-size: 20px;
	font-weight: 600;
	letter-spacing: 0.02em;
	text-align: center;
	color: #1c1c1c;
}

.mobile-menu__contacts-mail {
	display: block;
	width: fit-content;
	margin-inline: auto;
	font-size: 18px;
	font-weight: 500;
	letter-spacing: 0.02em;
	text-decoration: underline;
	text-decoration-color: rgba(28 28 28 / 0.6);
	text-decoration-thickness: 1px;
	text-underline-offset: 3px;
	text-decoration-skip-ink: none;
	color: rgba(28 28 28 / 0.6);
	cursor: pointer;
}

.mobile-menu__socials {
	margin-inline: auto;
	margin-bottom: 45px;
}

.mobile-menu__socials :deep(.socials__item-link) {
	width: 45px;
	height: 45px;
}

.mobile-menu__button--3 {
	margin-top: auto;
	color: #1c1c1c;
	background-color: transparent;
}

@media (max-width: 575.98px) {
	.mobile-menu__button-close {
		margin-bottom: 40px;
	}

	.mobile-menu__links {
		margin-bottom: 50px;
	}

	.mobile-menu__links-list {
		gap: 35px;
	}
}
</style>
