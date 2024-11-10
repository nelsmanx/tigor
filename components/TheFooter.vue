<script setup>
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
					<div class="footer__top-content">
						<div class="footer__logo-group">
							<div class="footer__logo">
								<BasicLogoSvg class="footer__logo-svg" />
							</div>
							<p class="footer__logo-desc">Аутсорс и&nbsp;аутстафф линейного персонала</p>
						</div>

						<BasicTags :tags="tags" class="footer__tags" />

						<div class="footer__contacts">
							<a class="footer__contacts-tel" href="tel:+79000000000">+7 (900) 000 00 00</a>
							<a class="footer__contacts-mail" href="mailto:info@tigor.pro">info@tigor.pro</a>
							<ul class="footer__social-list">
								<li class="footer__social-item">
									<a class="footer__social-item-link footer__social-item-link--wa" href=""></a>
								</li>
								<li class="footer__social-item">
									<a class="footer__social-item-link footer__social-item-link--tg" href=""></a>
								</li>
							</ul>
						</div>
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
					<div class="footer__bottom-group">
						<p class="footer__bottom-item">© 2024, ООО ТИГОР. Все права защищены.</p>
					</div>
					<div class="footer__bottom-group">
						<p class="footer__bottom-item">ИНН: 6165231522, ОГРН 1226100001511</p>
						<a class="footer__bottom-item" href="#">Политика конфиденциальности</a>
					</div>
				</div>
			</div>
		</div>
	</footer>

</template>

<style>
:root {
	--footer-logo-svg-letter: #2b2a29;
	--footer-logo-desc: rgba(28 28 28 / 0.9);
	--footer-link: rgba(28 28 28 / 0.9);
	--footer-tag-item: #1c1c1c;
	--footer-tag-item-border: #1c1c1c;
	--footer-tag-item-hl: #1c1c1c;
	--footer-tag-item-hl-border: #fee02e;
	--footer-tag-item-hl-bg: #fee02e;
	--footer-contacts-tel: #1c1c1c;
	--footer-contacts-mail: rgba(28 28 28 / 0.9);
}

:root[data-color-mode="dark"] {
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
</style>

<style scoped>
.footer {
	padding: 114px 0 45px;
}

.footer__top {
	margin-bottom: 102px;
}

.footer__top-layout {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
}

.footer__top-content {
	padding-right: 290px;
}

.footer__logo-group {
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
	max-width: 140px;
	font-size: 13px;
	font-weight: 400;
	text-align: center;
	color: var(--footer-logo-desc);
}

.footer__tags {
	margin-bottom: 45px;
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
	display: grid;
	grid-auto-flow: column;
	justify-content: start;
	align-items: center;
	gap: 40px;
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

.footer__social-list {
	display: grid;
	grid-auto-flow: column;
	gap: 4px;
}

.footer__social-item {}

.footer__social-item-link {
	display: block;
	width: 39px;
	height: 39px;
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 50%;
}

.footer__social-item-link--wa {
	background-image: url("/images/footer/social-icon-1.svg");
}

.footer__social-item-link--tg {
	background-image: url("/images/footer/social-icon-2.svg");
}

.footer__top-links {
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
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
}

.footer__bottom-group {
	display: flex;
}

.footer__bottom-item {
	font-size: 12px;
	font-weight: 300;
	color: #8c8c8c;
}

.footer__bottom-item:not(:last-child) {
	margin-right: 40px;
}
</style>