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
						<li class="header__nav-item"><a class="header__nav-link" href="#">О&nbsp;нас</a></li>
						<li class="header__nav-item"><a class="header__nav-link" href="#">Услуги</a></li>
						<li class="header__nav-item"><a class="header__nav-link" href="#">Отзывы</a></li>
						<li class="header__nav-item"><a class="header__nav-link" href="#">Контакты</a></li>
					</ul>
				</nav>
				<div class="header__contacts">
					<a class="header__contacts-tel" href="tel:+79000000000">+7 (900) 000 00 00</a>
					<a class="header__contacts-mail" href="mailto:info@tigor.pro">info@tigor.pro</a>
				</div>
				<button class="header__button header__button--1">Для заказчиков</button>
				<button class="header__button header__button--2 button-basic">Ищу работу</button>
				<div class="header__color-scheme">
					<p class="header__color-scheme-title"></p>
					<BasicColorSchemeToggler class="header__color-scheme-toggler" />
				</div>
			</div>
		</div>
	</header>
</template>

<style>
:root {
	--header-contacts-mail: rgba(28 28 28 / 0.6);
	--header-button-1-border: #1c1c1c;
	--header-button-1-font: #1c1c1c;
}

:root[data-color-mode="dark"] {
	--header-contacts-mail: rgba(254 224 46 / 0.9);
	--header-button-1-border: #fee02e;
	--header-button-1-font: #fee02e;
}
</style>

<style scoped>
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

/* .header__logo-svg-letter {
	fill: var(--header-logo-svg-letter);
	transition: fill 250ms;
} */
.header__company-desc {
	max-width: 140px;
	margin-right: 10px;
	font-size: 13px;
	font-weight: 400;
	text-align: center;
	color: var(--font-basic);
	opacity: 0.9;
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
	margin-bottom: 6px;
	font-size: 24px;
	font-weight: 600;
	letter-spacing: 0.02em;
	white-space: nowrap;
	color: var(--font-basic);
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
	margin-right: 17px;
	color: var(--header-button-1-font);
	background-color: transparent;
	border: 1.75px solid var(--header-button-1-border);
}

.header__button--2 {
	width: 194px;
	margin-right: 46px;
	color: #2b2a29;
	box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
}

.header__color-scheme {}

.header__color-scheme-title {
	margin-bottom: 12px;
	font-weight: 400;
	font-size: 13px;
	text-align: center;
	color: var(--font-basic);
}

.header__color-scheme-title::before {
	content: "Светлая тема";
}

html[data-color-color-scheme="dark"] .header__color-scheme-title::before {
	content: "Темная тема";
}

.header__color-scheme-toggler {
	margin-left: 34px;
}

@media (max-width: 1899.98px) {
	.header__nav-list {
		gap: 35px;
	}
}
</style>