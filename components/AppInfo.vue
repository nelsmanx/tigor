<template>
	<section class="info">
		<div class="container">
			<div class="info__inner">
				<div class="info__block-1">
					<h2 class="info__title">Аутсорсинг персонала в&nbsp;Москве и&nbsp;Московской области</h2>
					<div class="info__group">
						<img class="info__image" src="/images/deliverymen.png" alt="" aria-hidden="true">
						<a class="info__link" href="#">Узнать подробнее</a>
						<a class="info__mail" href="mailto:info@tigor.pro">info@tigor.pro</a>
					</div>
				</div>
				<div class="info__block-2">
					<div class="info__desc">
						<p class="info__desc-par">Аутсорсинг позволяет освободить больше времени для основной деятельности компании нанимателя, передав заботы по доставке товаров на арендованных курьеров. Арендованные сотрудники будут выполнять свои обязанности, но бухгалтерский и кадровый отделы будут освобождены от лишней работы, это позволит сотрудникам этих отделов сосредоточится на более важных вопросах.</p>
						<p class="info__desc-par">Аутсорсинг курьеров набирает всё большую популярность как среди крупных, так и среди небольших компаний. Если рассматривать специфику предприятий Москвы наиболее часто прибегающих к найму курьеров, то большей популярностью такой аутсорсинг пользуется у компаний, предоставляющих услугу общественного питания и магазины продающие товары в розницу.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
:global(:root) {
	--info-mail: rgba(28 28 28 / 0.6);
}

:global(:root[data-color-scheme="dark"]) {
	--info-mail: rgba(254 224 46 / 0.9);
}

.info {
	padding: 80px 0;
}

.info__inner {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;
}

.info__block-1 {}

.info__title {
	max-width: 590px;
	margin-bottom: 40px;
	font-family: var(--secondary-font-family);
	font-size: var(--section-title-fz);
	font-weight: 400;
	color: var(--font-basic);
}

.info__group {
	display: grid;
	grid-template-areas:
		"image"
		"link"
		"mail";
}

.info__image {
	grid-area: image;
	width: 254px;
	margin-bottom: 60px;
}

.info__link {
	grid-area: link;
	display: block;
	width: fit-content;
	margin-bottom: 15px;
	padding-right: 33px;
	font-size: 22px;
	font-weight: 400;
	color: var(--font-basic);
	background-size: 18px 10px;
	background-position: right bottom 7px;
	background-repeat: no-repeat;
	background-image: url("data:image/svg+xml,%3Csvg width='18' height='10' viewBox='0 0 18 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17.4304 4.38078L13.2582 0.208609C12.9801 -0.0695362 12.4238 -0.0695362 12.1457 0.208609C11.8675 0.486754 11.8675 1.04304 12.1457 1.32119L14.9271 4.10264H0.834435C0.37086 4.10264 0 4.4735 0 4.93707C0 5.40065 0.37086 5.77151 0.834435 5.77151H14.9271L12.1457 8.55296C11.8675 8.8311 11.8675 9.38739 12.1457 9.66554C12.4238 9.94368 12.9801 9.94368 13.2582 9.66554L17.4304 5.49336C17.7086 5.21522 17.7086 4.65893 17.4304 4.38078Z' fill='%231C1C1C' /%3E%3C/svg%3E");
}

html[data-color-scheme="dark"] .info__link {
	background-image: url("data:image/svg+xml,%3Csvg width='18' height='10' viewBox='0 0 18 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17.4304 4.38078L13.2582 0.208609C12.9801 -0.0695362 12.4238 -0.0695362 12.1457 0.208609C11.8675 0.486754 11.8675 1.04304 12.1457 1.32119L14.9271 4.10264H0.834435C0.37086 4.10264 0 4.4735 0 4.93707C0 5.40065 0.37086 5.77151 0.834435 5.77151H14.9271L12.1457 8.55296C11.8675 8.8311 11.8675 9.38739 12.1457 9.66554C12.4238 9.94368 12.9801 9.94368 13.2582 9.66554L17.4304 5.49336C17.7086 5.21522 17.7086 4.65893 17.4304 4.38078Z' fill='%23FFFFFF' /%3E%3C/svg%3E");
}

.info__mail {
	grid-area: mail;
	display: block;
	width: fit-content;
	font-weight: 500;
	font-size: 16px;
	line-height: normal;
	letter-spacing: 0.02em;
	text-decoration: underline;
	text-decoration-color: var(--info-mail);
	text-decoration-thickness: 1px;
	text-underline-offset: 3px;
	text-decoration-skip-ink: none;
	color: var(--info-mail);
}

.info__block-2 {}

.info__desc {}

.info__desc-par {
	font-size: 22px;
	font-weight: 400;
	line-height: 1.68;
	color: var(--font-basic);
}

.info__desc-par:not(:last-child) {
	margin-bottom: 38px;
}

@media (max-width: 1399.98px) {
	.info__inner {
		grid-template-columns: 100%;
		gap: 80px;
	}

	.info__title {
		max-width: none;
	}

	.info__group {
		grid-template-areas:
			"image link"
			"image mail";
		column-gap: 40px;
		row-gap: 10px;
		width: fit-content;
	}

	.info__image {
		margin-bottom: 0;
	}

	.info__link {
		margin-bottom: 0;
		align-self: end;
	}

	.info__desc-par:not(:last-child) {
		margin-bottom: 30px;
	}
}

@media (max-width: 991.98px) {
	.info {
		padding: var(--section-space) 0;
	}

	.info__inner {
		gap: 60px;
	}

	.info__image {
		width: 200px;
	}

	.info__desc-par {
		font-size: 20px;
	}

	.info__desc-par:not(:last-child) {
		margin-bottom: 20px;
	}

	.info__link {
		padding-right: 28px;
		font-size: 20px;
		background-size: 16px 9px;
	}
}

@media (max-width: 767.98px) {
	.info__inner {
		gap: 50px;
	}

	.info__title {
		margin-bottom: 30px;
	}

	.info__group {
		column-gap: 30px;
	}

	.info__image {
		width: 180px;
	}

	.info__desc-par {
		font-size: 18px;
	}

	.info__desc-par:not(:last-child) {
		margin-bottom: 16px;
	}

	.info__link {
		padding-right: 22px;
		font-size: 18px;
		background-size: 14px 8px;
		background-position: right bottom 6px;
	}
}

@media (max-width: 575.98px) {
	.info__inner {
		gap: 40px;
	}

	.info__image {
		width: 160px;
	}

	.info__group {
		column-gap: 25px;
		row-gap: 6px;
	}

	.info__link {
		padding-right: 18px;
		font-size: 16px;
		background-size: 12px 7px;
	}

	.info__desc-par {
		font-size: 16px;
	}

	.info__desc-par:not(:last-child) {
		margin-bottom: 12px;
	}
}

@media (max-width: 479.98px) {
	.info__desc-par {
		font-size: 14px;
	}

	.info__desc-par:not(:last-child) {
		margin-bottom: 10px;
	}
}

@media (max-width: 379.98px) {
	.info__inner {
		gap: 30px;
	}

	.info__group {
		grid-template-areas:
			"image"
			"link"
			"mail";
		gap: 0;
	}

	.info__image {
		margin-bottom: 20px;
	}

	.info__link {
		margin-bottom: 6px;
	}
}
</style>