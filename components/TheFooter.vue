<script setup>
const companyInfo = useCompanyInfo();

const tags = [
	"Найдем сотрудников",
	"Подготовим кадров",
	"Минимизаируем риски",
	"Проведем обучение",
	"Найдем персонал за сутки",
	"Что-то еще",
	"Что-то еще",
	"Что-то еще",
	"Что-то еще",
];
</script>

<template>
	<footer class="footer">
		<div class="container">
			<div class="footer__top">
				<div class="footer__top-layout">
					<div class="footer__logo-group">
						<div class="footer__logo">
							<BasicLogoSvg class="footer__logo-svg" />
						</div>
						<p class="footer__logo-desc">Аутсорс и аутстафф<br /> линейного персонала</p>
					</div>

					<BasicTags :tags="tags" class="footer__tags" />

					<div class="footer__contacts">
						<div class="footer__contacts-tels">
							<a class="footer__contacts-tel" :href="`tel:${companyInfo.formatTel(companyInfo.tel)}`">{{ companyInfo.tel }}</a>
							<a class="footer__contacts-tel" :href="`tel:${companyInfo.formatTel(companyInfo.tel2)}`">{{ companyInfo.tel2 }}</a>
						</div>
						<a class="footer__contacts-mail" :href="`mailto:${companyInfo.mail}`">{{ companyInfo.mail }}</a>
						<BasicSocials class="footer__socials" />
					</div>
					<div class="footer__top-links">
						<ul class="footer__link-list">
							<li class="footer__link-item">
								<a class="footer__link" href="#">О компании</a>
							</li>
							<li class="footer__link-item">
								<a class="footer__link" href="#">Клиенты и партнеры</a>
							</li>
							<li class="footer__link-item">
								<a class="footer__link" href="#">Наши преимущества</a>
							</li>
							<li class="footer__link-item">
								<a class="footer__link" href="#">Вакансии</a>
							</li>
							<li class="footer__link-item">
								<a class="footer__link" href="#">Аутсорс персонала</a>
							</li>
							<li class="footer__link-item">
								<a class="footer__link" href="#">Реализованные проекты</a>
							</li>
							<li class="footer__link-item">
								<a class="footer__link" href="#">Индивидуальный подбор</a>
							</li>
							<li class="footer__link-item">
								<a class="footer__link" href="#">FAQ (Вопрос-ответ)</a>
							</li>
							<li class="footer__link-item">
								<a class="footer__link" href="#">Свой автопарк</a>
							</li>
							<li class="footer__link-item">
								<a class="footer__link" href="#">Кейсы</a>
							</li>
							<li class="footer__link-item">
								<a class="footer__link" href="#">Как мы работаем</a>
							</li>
							<li class="footer__link-item">
								<a class="footer__link" href="#">Контакты</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="footer__bottom">
				<div class="footer__bottom-layout">
					<p class="footer__bottom-item">© 2024, ООО ТИГОР. Все&nbsp;права&nbsp;защищены.</p>
					<p class="footer__bottom-item">ИНН:&nbsp;6165231522, ОГРН&nbsp;1226100001511</p>
					<a class="footer__bottom-item" href="#">Политика конфиденциальности</a>
				</div>
			</div>
		</div>
	</footer>

</template>

<style scoped>
:global(:root) {
	--footer-logo-svg-letter: #2b2a29;
	--footer-logo-desc: rgba(28 28 28 / 0.9);
	--footer-link: rgba(28 28 28 / 0.9);
	--footer-tag-item: #1c1c1c;
	--foote: global(r-tag-item-border: #1c1c1c);
	--footer-tag-item-hl: #1c1c1c;
	--footer-tag-item-hl-border: #fee02e;
	--footer-tag-item-hl-bg: #fee02e;
	--footer-contacts-tel: #1c1c1c;
	--footer-contacts-mail: rgba(28 28 28 / 0.9);
}

:global(:root[data-color-scheme="dark"]) {
	--footer-logo-svg-letter: #fff;
	--footer-logo-desc: rgba(245 247 250 /0.9);
	--footer-link: rgba(245 247 250 /0.9);
	--footer-tag-item: #f2f2f2;
	--footer-tag-item-border: #f2f2f2;
	--footer-tag-item-hl: #fee333;
	--footer-tag-item-hl-border: #fee333;
	--footer-tag-item-hl-bg: transparent;
	--footer-contacts-tel: #fff;
	--footer-contacts-mail: rgba(254 224 46 / 0.9);
}

.footer {
	padding: 114px 0 45px;
}

.footer__top {
	margin-bottom: 102px;
}

.footer__top-layout {
	display: grid;
	grid-template-areas:
		"logo-group links"
		"tags links"
		"contacts links";
	grid-template-columns: repeat(2, 1fr);
	align-items: start;
	column-gap: 30px;
}

.footer__top-content {}

.footer__logo-group {
	grid-area: logo-group;
	display: flex;
	align-items: center;
	margin-bottom: 42px;
}

.footer__logo {
	width: 142px;
	margin-right: 42px;
}

.footer__logo-svg {
	width: 100%;
}

.footer__logo-desc {
	position: relative;
	top: 4px;
	font-size: 13px;
	font-weight: 400;
	text-align: center;
	color: var(--footer-logo-desc);
}

.footer__tags {
	grid-area: tags;
	max-width: 585px;
}

.footer__tags :deep(.tags__item) {
	padding: 0.5em 1.1em;
	border-color: var(--footer-tag-item-border);
	color: var(--footer-tag-item)
}

.footer__tags :deep(.tags__item:first-child) {
	color: var(--footer-tag-item-hl);
	background-color: var(--footer-tag-item-hl-bg);
	border-color: var(--footer-tag-item-hl-border);
}

.footer__contacts {
	grid-area: contacts;
	display: grid;
	grid-auto-flow: column;
	justify-content: start;
	align-items: center;
	gap: 40px;
	margin-top: 45px;
}

.footer__contacts-tels {
	display: grid;
	gap: 5px;
}

.footer__contacts-tel {
	font-size: 24px;
	font-weight: 600;
	letter-spacing: 0.02em;
	color: var(--footer-contacts-tel);
}

.footer__contacts-mail {
	font-weight: 500;
	font-size: 16px;
	line-height: normal;
	letter-spacing: 0.02em;
	text-align: center;
	text-decoration: underline;
	text-decoration-color: var(--footer-contacts-mail);
	text-decoration-thickness: 1px;
	text-underline-offset: 3px;
	text-decoration-skip-ink: none;
	color: var(--footer-contacts-mail);
}

.footer__socials {}

.footer__top-links {
	grid-area: links;
	padding-top: 4px;
}

.footer__link-list {
	display: grid;
	grid-template-columns: repeat(2, auto);
	justify-content: start;
	column-gap: 126px;
	row-gap: 29px;
}

.footer__link-item {}

.footer__link {
	font-size: 18px;
	font-weight: 500;
	letter-spacing: 0.02em;
	color: var(--footer-link)
}

.footer__bottom {}

.footer__bottom-layout {
	display: grid;
	grid-template-columns: calc(50% + 15px) auto auto;
	justify-content: start;
}

.footer__bottom-item {
	font-size: 12px;
	font-weight: 300;
	color: #8c8c8c;
}

.footer__bottom-item:nth-child(2) {
	margin-right: 40px;
}

@media (max-width: 1399.98px) {
	.footer__top-layout {
		grid-template-areas:
			"logo-group links"
			"tags links"
			"contacts contacts";
	}

	.footer__tags {
		max-width: 460px;
	}

	.footer__contacts {
		gap: 30px;
	}

	.footer__link-list {
		column-gap: 70px;
		row-gap: 25px;
	}
}

@media (max-width: 1199.98px) {
	.footer__link-list {
		column-gap: 30px;
	}

	.footer__link {
		font-size: 16px;
	}

	.footer__bottom-layout {
		grid-template-columns: none;
		grid-auto-flow: column;
		justify-content: center;
		gap: 40px;
	}

	.footer__bottom-item:nth-child(2) {
		margin-right: 0;
	}
}

@media (max-width: 991.98px) {
	.footer {
		padding: calc(1.3 * var(--section-space)) 0 calc(0.4 * var(--section-space));
	}

	.footer__top {
		margin-bottom: 80px;
	}

	.footer__top-layout {
		grid-template-areas:
			"logo-group"
			"tags"
			"links"
			"contacts";
		grid-template-columns: 100%;
	}

	.footer__logo-group {
		justify-content: center;
	}

	.tags.footer__tags {
		max-width: 560px;
		margin-inline: auto;
		margin-bottom: 50px;
	}

	.footer__tags :deep(.tags__list) {
		justify-content: center;
	}

	.footer__link-list {
		column-gap: 60px;
		width: fit-content;
		margin-inline: auto;
	}

	.footer__contacts {
		margin-top: 50px;
		justify-content: center;
	}

	.footer__contacts-tel {
		font-size: 22px;
	}

	.footer__bottom-layout {
		gap: 10px;
	}
}

@media (max-width: 767.98px) {
	.footer__link-list {
		column-gap: 40px;
		row-gap: 20px;
	}

	.footer__contacts-tel {
		font-size: 20px;
	}

	.footer :deep(.socials__item-link) {
		--diameter: 32px;
	}

	.footer__bottom-layout {
		grid-template-columns: 130px 130px 130px;
		justify-content: center;
		gap: 20px;
	}
}

@media (max-width: 575.98px) {
	.footer__logo-group {
		margin-bottom: 35px;
	}

	.footer__logo {
		width: 130px;
		margin-right: 30px;
	}

	.footer__logo-desc {
		top: 6px;
		font-size: 12px;
	}

	.tags.footer__tags {
		margin-bottom: 30px;
	}

	.footer :deep(.tags__list) {
		--gap: 8px;
	}

	.footer :deep(.tags__item) {
		font-size: 10px;
	}

	.footer__link-list {
		column-gap: 30px;
		row-gap: 15px;
	}

	.footer__link {
		font-size: 14px;
	}

	.footer__contacts {
		margin-top: 40px;
		gap: 20px;
	}

	.footer__contacts-tel {
		font-size: 18px;
	}

	.footer__contacts-mail {
		font-size: 14px;
	}

	.footer :deep(.socials__item-link) {
		--diameter: 28px;
	}

	.footer__bottom-layout {
		grid-template-columns: 110px 105px 105px;
		gap: 15px;
	}

	.footer__bottom-item {
		font-size: 10px;
	}
}

@media (max-width: 479.98px) {
	.footer__top {
		margin-bottom: 50px;
	}

	.footer__contacts {
		grid-auto-flow: row;
		justify-content: center;
		gap: 0;
	}

	.footer__contacts-tels {
		justify-items: center;
		gap: 10px;
		margin-bottom: 10px;
	}

	.footer__contacts-tel {
		/* margin-bottom: 10px; */
	}

	.footer__contacts-mail {
		margin-bottom: 15px;
	}

	.footer__socials {
		margin-inline: auto;
	}
}

@media (max-width: 379.98px) {
	.footer__top {
		margin-bottom: 30px;
	}

	.footer__logo-group {
		display: block;
	}

	.footer__logo {
		width: 110px;
		margin-inline: auto;
	}

	.footer__link-list {
		grid-template-columns: 100%;
		row-gap: 10px;
	}

	.footer__link-item {
		text-align: center;
	}

	.footer__bottom-layout {
		grid-template-columns: none;
		grid-auto-flow: row;
		gap: 8px;
	}

	.footer__bottom-item {
		text-align: center;
	}
}
</style>