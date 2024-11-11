<script setup></script>

<template>
	<section class="companies section-island">
		<div class="companies__inner">

			<BasicSectionHeader>
				<template #title>Нам доверяют</template>
				<template #desc>C нами работают более 50 крупных компаний по всей России</template>
			</BasicSectionHeader>

			<div class="companies__body">
				<div class="container">
					<ul class="companies__list">
						<li class="companies__item">
							<div class="companies__item-logo companies__item-logo--1"></div>
							<p class="companies__item-title">Магнит</p>
						</li>
						<li class="companies__item">
							<div class="companies__item-logo companies__item-logo--2"></div>
							<p class="companies__item-title">Яндекс GO</p>
						</li>
						<li class="companies__item">
							<div class="companies__item-logo companies__item-logo--3"></div>
							<p class="companies__item-title">Лента</p>
						</li>
						<li class="companies__item">
							<div class="companies__item-logo companies__item-logo--4"></div>
							<p class="companies__item-title">Яндекс Маркет</p>
						</li>
						<li class="companies__item">
							<div class="companies__item-logo companies__item-logo--5"></div>
							<p class="companies__item-title">Яндекс еда</p>
						</li>
						<li class="companies__item">
							<div class="companies__item-logo companies__item-logo--6"></div>
							<p class="companies__item-title">Самокат</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.companies {}

.companies__inner {
	background-color: #f5f7fa;
	border-radius: 50px;
}

.companies :deep(.section-header__group) {
	padding-left: 30px;
}

.companies :deep(.section-header__desc) {
	max-width: 400px;
}

.companies__body {
	padding: 50px 0 82px;
}

.companies__list {
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	gap: 27px;
}

.companies__item {}

.companies__item-logo {
	width: 100%;
	height: 0;
	margin-bottom: 24px;
	padding: calc(100% / (1 / 1)) 0 0;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 33px;
}

.companies__item-logo--1 {
	background-image: url("/images/companies/1.png");
}

.companies__item-logo--2 {
	background-image: url("/images/companies/2.png");
}

.companies__item-logo--3 {
	background-image: url("/images/companies/3.png");
}

.companies__item-logo--4 {
	background-image: url("/images/companies/4.png");
}

.companies__item-logo--5 {
	background-image: url("/images/companies/5.png");
}

.companies__item-logo--6 {
	background-image: url("/images/companies/6.png");
}

.companies__item-title {
	font-size: 22px;
	font-weight: 400;
	text-align: center;
	color: #080a05;
}
</style>