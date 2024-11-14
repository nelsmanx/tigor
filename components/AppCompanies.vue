<script setup></script>

<template>
	<section class="companies section-island">
		<div class="companies__inner">

			<BasicSectionHeader>
				<template #title>Нам доверяют</template>
				<template #desc>C нами работают более 50 крупных компаний по&nbsp;всей&nbsp;России</template>
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
	border-radius: var(--section-border-radius);
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
	gap: 30px;
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

@media (max-width: 1399.98px) {
	.companies__body {
		padding: 40px 0 60px;
	}

	.companies__item-title {
		font-size: 20px;
	}
}

@media (max-width: 1499.98px) {
	.companies :deep(.section-header__desc) {
		max-width: none;
	}
}

@media (max-width: 1199.98px) {
	.companies__list {
		gap: 20px;
	}

	.companies__item-title {
		font-size: 18px;
	}
}

@media (max-width: 991.98px) {
	.companies__body {
		padding: 30px 0 40px;
	}

	.companies__item-logo {
		margin-bottom: 15px;
		border-radius: 20px;
	}

	.companies__item-title {
		font-size: 16px;
	}
}

@media (max-width: 767.98px) {
	.companies__list {
		grid-template-columns: repeat(3, 1fr);
		gap: 30px;
	}

	.companies__item-logo {
		margin-bottom: 10px;
	}
}

@media (max-width: 575.98px) {
	.companies__body {
		padding: 30px 0;
	}

	.companies__list {
		row-gap: 30px;
		column-gap: 20px;
	}
}

@media (max-width: 479.98px) {
	.companies__list {
		row-gap: 20px;
		column-gap: 15px;
	}

	.companies__item-logo {
		margin-bottom: 5px;
	}

	.companies__item-title {
		font-size: 14px;
	}
}

@media (max-width: 379.98px) {
	.companies__list {
		row-gap: 15px;
		column-gap: 10px;
	}

	.companies__item-title {
		font-size: 12px;
	}
}
</style>