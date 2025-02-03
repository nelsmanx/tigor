<script setup>
const companyInfo = useCompanyInfo();
</script>

<template>
	<header class="header ">
		<div class="container container--full-width">
			<div class="header__inner">
				<div class="header__logo">
					<BasicLogoSvg class="header__logo-svg" />
				</div>

				<p class="header__company-desc">Аутсорс и&nbsp;аутстафф линейного персонала</p>
				<nav class="header__nav">
					<ul class="header__nav-list">
						<li class="header__nav-item"><a class="header__nav-link" href="#info">О&nbsp;нас</a></li>
						<li class="header__nav-item"><a class="header__nav-link" href="#outsource">Услуги</a></li>
						<li class="header__nav-item"><a class="header__nav-link" href="#companies">Отзывы</a></li>
						<li class="header__nav-item"><a class="header__nav-link" href="#contacts">Контакты</a></li>
					</ul>
				</nav>
				<div class="header__contacts">
					<a class="header__contacts-tel" :href="`tel:+${companyInfo.formatTel(companyInfo.tel)}`">{{ companyInfo.tel }}</a>
					<a class="header__contacts-tel" :href="`tel:+${companyInfo.formatTel(companyInfo.tel2)}`">{{ companyInfo.tel2 }}</a>
					<a v-if="false" class="header__contacts-mail" :href="`mailto:${companyInfo.mail}`">{{ companyInfo.mail }}</a>
				</div>

				<div class="header__actions">
					<button class="header__button header__button--1" data-bs-toggle="modal" data-bs-target="#modal-callback">Для заказчиков</button>
					<button class="header__button header__button--2 button-basic" data-bs-toggle="modal" data-bs-target="#modal-callback-alt">Ищу работу</button>
				</div>

				<BasicColorSchemeElement class="header__color-scheme" />

				<a class="header__tel" :href="`tel:+${companyInfo.formatTel(companyInfo.tel)}`" :title="companyInfo.tel"></a>
				<button class="header__hamb" data-bs-toggle="offcanvas" data-bs-target="#mobile-menu"></button>
			</div>
		</div>
	</header>
</template>

<style scoped>
:global(:root) {
	--header-company-desc: rgba(28 28 28 / 0.9);
	--header-contacts-mail: rgba(28 28 28 / 0.6);
	--header-button-1-border: #1c1c1c;
	--header-button-1-font: #1c1c1c;
}

:global(:root[data-color-scheme="dark"]) {
	--header-company-desc: rgba(255 255 255 / 0.9);
	--header-contacts-mail: rgba(254 224 46 / 0.9);
	--header-button-1-border: #fee02e;
	--header-button-1-font: #fee02e;
}

.header {
	padding: 42px 0;
}

.header__inner {
	display: flex;
	align-items: center;
}

.header__logo {
	position: relative;
	width: 172px;
	margin-right: 47px;
	object-fit: contain;
}

.header__logo-svg {
	--vertical-offset: 3px;
	position: absolute;
	top: 50%;
	left: 0;
	width: 100%;
	transform: translateY(calc(-50% - var(--vertical-offset)));
}

.header__company-desc {
	max-width: 140px;
	font-size: 13px;
	font-weight: 400;
	text-align: center;
	color: var(--header-company-desc);
}

.header__nav {
	margin-inline: auto;
}

.header__nav-list {
	display: grid;
	grid-auto-flow: column;
	align-items: center;
	gap: 50px;
}

.header__nav-item {}

.header__nav-link {
	font-size: 18px;
	font-weight: 500;
	line-height: normal;
	letter-spacing: 0.02em;
	color: var(--font-basic);
}

.header__contacts {
	margin-right: 54px;
}

.header__contacts-tel {
	display: block;
	font-size: 24px;
	font-weight: 600;
	letter-spacing: 0.02em;
	white-space: nowrap;
	color: var(--font-basic);
}

.header__contacts-tel:not(:last-child) {
	margin-bottom: 6px;
}

.header__contacts-mail {
	display: block;
	width: fit-content;
	margin-inline: auto;
	font-weight: 500;
	font-size: 16px;
	line-height: normal;
	letter-spacing: 0.02em;
	text-align: center;
	text-decoration: underline;
	text-decoration-color: var(--header-contacts-mail);
	text-decoration-thickness: 1px;
	text-underline-offset: 3px;
	text-decoration-skip-ink: none;
	color: var(--header-contacts-mail);
}

.header__actions {
	display: grid;
	grid-auto-flow: column;
	gap: 17px;
	margin-right: 46px;
}

.header__button {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 56px;
	font-weight: 500;
	font-size: 18px;
	white-space: nowrap;
	border-radius: 53px;
	cursor: pointer;
}

.header__button--1 {
	width: 223px;
	color: var(--header-button-1-font);
	background-color: transparent;
	border: 1.75px solid var(--header-button-1-border);
}

.header__button--2 {
	width: 194px;
	color: #2b2a29;
	box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
}

.header__tel {
	display: none;
	--scale: 1.5;
	width: calc(15px * var(--scale));
	height: calc(15px * var(--scale));
	margin-right: 30px;
	background-size: contain;
	background-position: right center;
	background-repeat: no-repeat;
	background-image: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 3.45808C0 4.66617 0.233533 4.95359 0.583832 6.00898C1.17665 7.79641 1.78743 8.61826 2.89671 9.99251C3.13024 10.2844 3.48054 10.6392 3.74551 10.9042C3.81737 10.9805 3.83533 11.0299 3.90269 11.0973L4.98952 12.0898C5.37126 12.4132 5.75748 12.7365 6.17515 13.015C7.18114 13.6841 7.81437 14.0299 8.96856 14.4117C9.15269 14.4701 9.29641 14.5374 9.48054 14.6003C10.0689 14.8069 10.6437 14.9686 11.2231 15H11.6632C12.0539 14.9775 12.4536 14.8877 12.8623 14.7081C13.482 14.4341 14.4611 13.9132 14.7036 13.2665C14.8832 12.7949 15 12.3054 15 11.7485C15 11.5599 14.8204 11.4341 14.6946 11.3488L13.3024 10.5763C13.1542 10.5 13.006 10.4057 12.8533 10.3249C12.6871 10.2305 12.5434 10.1497 12.3862 10.0554C11.4296 9.45359 11.3308 9.16168 10.2799 10.4865C9.30539 11.7081 9.27395 11.6362 8.25449 11.021C6.80838 10.1452 5.88323 9.46707 4.82784 8.06138C4.5 7.61677 4.27096 7.23054 3.98802 6.76347C3.38174 5.75299 3.27395 5.69461 4.5 4.73353C6.04491 3.52096 5.41168 3.50299 4.68862 2.16916C4.60329 2.01647 4.50449 1.85479 4.42365 1.6976L3.79042 0.547904C3.53892 0.0898204 3.48054 0 3.07635 0C2.66766 0 2.06138 0.179641 1.75599 0.287425C0.871257 0.606287 0 2.4476 0 3.45808Z' fill='%232B2A29' /%3E%3C/svg%3E");
}

html[data-color-scheme="dark"] .header__tel {
	background-image: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 3.45808C0 4.66617 0.233533 4.95359 0.583832 6.00898C1.17665 7.79641 1.78743 8.61826 2.89671 9.99251C3.13024 10.2844 3.48054 10.6392 3.74551 10.9042C3.81737 10.9805 3.83533 11.0299 3.90269 11.0973L4.98952 12.0898C5.37126 12.4132 5.75748 12.7365 6.17515 13.015C7.18114 13.6841 7.81437 14.0299 8.96856 14.4117C9.15269 14.4701 9.29641 14.5374 9.48054 14.6003C10.0689 14.8069 10.6437 14.9686 11.2231 15H11.6632C12.0539 14.9775 12.4536 14.8877 12.8623 14.7081C13.482 14.4341 14.4611 13.9132 14.7036 13.2665C14.8832 12.7949 15 12.3054 15 11.7485C15 11.5599 14.8204 11.4341 14.6946 11.3488L13.3024 10.5763C13.1542 10.5 13.006 10.4057 12.8533 10.3249C12.6871 10.2305 12.5434 10.1497 12.3862 10.0554C11.4296 9.45359 11.3308 9.16168 10.2799 10.4865C9.30539 11.7081 9.27395 11.6362 8.25449 11.021C6.80838 10.1452 5.88323 9.46707 4.82784 8.06138C4.5 7.61677 4.27096 7.23054 3.98802 6.76347C3.38174 5.75299 3.27395 5.69461 4.5 4.73353C6.04491 3.52096 5.41168 3.50299 4.68862 2.16916C4.60329 2.01647 4.50449 1.85479 4.42365 1.6976L3.79042 0.547904C3.53892 0.0898204 3.48054 0 3.07635 0C2.66766 0 2.06138 0.179641 1.75599 0.287425C0.871257 0.606287 0 2.4476 0 3.45808Z' fill='%23FFFFFF' /%3E%3C/svg%3E");
}

.header__hamb {
	display: none;
	--scale: 1.5;
	width: calc(17px * var(--scale));
	height: calc(15px * var(--scale));
	background-size: contain;
	background-position: right center;
	background-repeat: no-repeat;
	background-color: transparent;
	background-image: url("data:image/svg+xml,%3Csvg width='17' height='15' viewBox='0 0 17 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.849738 2.30476H16.1503C17 2.30476 17 1.43925 17 1.43925C17 0.573731 16.1503 0.57373 16.1503 0.57373H0.849738C0 0.57373 0 1.43925 0 1.43925C0 2.30476 0.849738 2.30476 0.849738 2.30476ZM16.1503 6.63344H0.849738C0 6.63344 0 7.49895 0 7.49895C0 8.36447 0.849738 8.36447 0.849738 8.36447H16.1503C17 8.36447 17 7.49895 17 7.49895C17 6.63344 16.1503 6.63344 16.1503 6.63344ZM16.1503 12.6946H0.849738C0 12.6946 0 13.5601 0 13.5601C0 14.4256 0.849738 14.4256 0.849738 14.4256H16.1503C17 14.4256 17 13.5601 17 13.5601C17 12.6946 16.1503 12.6946 16.1503 12.6946Z' fill='%232B2A29' /%3E%3C/svg%3E");
	border: none;
}

html[data-color-scheme="dark"] .header__hamb {
	background-image: url("data:image/svg+xml,%3Csvg width='17' height='15' viewBox='0 0 17 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.849738 2.30476H16.1503C17 2.30476 17 1.43925 17 1.43925C17 0.573731 16.1503 0.57373 16.1503 0.57373H0.849738C0 0.57373 0 1.43925 0 1.43925C0 2.30476 0.849738 2.30476 0.849738 2.30476ZM16.1503 6.63344H0.849738C0 6.63344 0 7.49895 0 7.49895C0 8.36447 0.849738 8.36447 0.849738 8.36447H16.1503C17 8.36447 17 7.49895 17 7.49895C17 6.63344 16.1503 6.63344 16.1503 6.63344ZM16.1503 12.6946H0.849738C0 12.6946 0 13.5601 0 13.5601C0 14.4256 0.849738 14.4256 0.849738 14.4256H16.1503C17 14.4256 17 13.5601 17 13.5601C17 12.6946 16.1503 12.6946 16.1503 12.6946Z' fill='%23FFFFFF' /%3E%3C/svg%3E");
}

@media (max-width: 1899.98px) {
	.header__nav-list {
		gap: 35px;
	}
}

@media (max-width: 1799.98px) {
	.header__logo {
		margin-right: 0;
	}

	.header__company-desc {
		display: none;
	}
}

@media (max-width: 1599.98px) {
	.header__contacts {
		display: none;
	}

	.header__tel,
	.header__hamb {
		display: block;
	}

	.header__color-scheme {
		display: flex;
		align-items: center;
		margin-right: 30px;
	}

	.header__actions {
		margin-right: 30px;
	}
}

@media (max-width: 1399.98px) {
	.header__logo {
		width: 150px;
	}

	.header__actions {
		display: none;
	}
}

@media (max-width: 991.98px) {
	.header {
		padding: 30px 0;
	}

	.header__logo {
		width: 120px;
	}

	.header__logo-svg {
		--vertical-offset: 2px;
	}

	.header__nav {
		display: none;
	}

	.header__color-scheme {
		margin-left: auto;
	}
}

@media (max-width: 479.98px) {
	.header {
		padding: 23px 0;
	}

	.header__inner {
		display: grid;
		grid-template-areas:
			"logo color-scheme tel hamb"
			"actions actions actions actions";
		grid-template-columns: auto 1fr auto auto;
		row-gap: 34px;
	}

	.header__logo {
		grid-area: logo;
		width: 85px;
	}

	.header__logo-svg {
		--vertical-offset: 1px;
	}

	.header__color-scheme {
		grid-area: color-scheme;
		margin-right: 26px;
	}

	.header__tel {
		grid-area: tel;
		--scale: 1;
		margin-right: 26px;
	}

	.header__hamb {
		grid-area: hamb;
		--scale: 1;
	}

	.header__actions {
		grid-area: actions;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 8px;
		margin-right: 0;
	}

	.header__button {
		width: 100%;
		height: 43px;
		font-size: 13px;
	}
}
</style>