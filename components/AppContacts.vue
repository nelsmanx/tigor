<script setup>
const companyInfo = useCompanyInfo();

const cityTabs = ["Москва", "Волгоград", "Еще город"];
const mapTabs = [{ coordinates: [55.776406, 37.690884] }, { coordinates: [48.714417, 44.524459] }, { coordinates: [59.939864, 30.314566] }];
const activeTab = ref(1);
</script>

<template>
	<section id="contacts" class="contacts section-island">
		<div class="contacts__inner">
			<div class="container">
				<div class="contacts__layout">
					<div class="contacts__info">
						<h2 class="contacts__title">Адрес центрального офиса&nbsp;компании:</h2>

						<div class="contacts__city-tabs">
							<ul class="contacts__city-tabs-list">
								<li v-for="(tab, index) in cityTabs" :key="tab"
									@click="activeTab = index + 1"
									:class="{ 'is-active': index + 1 === activeTab }"
									class="contacts__city-tabs-item">
									{{ tab }}
								</li>
							</ul>
						</div>

						<p class="contacts__address">г. Москва, Фридриха Энгельса 46с7 подъезд&nbsp;1, этаж&nbsp;3</p>
						<ul class="contacts__list">
							<li class="contacts__item">
								<span class="hl">Телефон мобильный:</span> {{ companyInfo.tel }}
							</li>
							<li class="contacts__item">
								<span class="hl">Телефон городской:</span> {{ companyInfo.tel2 }}
							</li>
							<li class="contacts__item">
								<span class="hl">Заказ услуг:</span> {{ companyInfo.mail }}
							</li>
							<li class="contacts__item">
								<span class="hl">Для соискателей:</span> {{ companyInfo.mail }}
							</li>
						</ul>

						<a class="contacts__button button-basic" :href="`tel:${companyInfo.formatTel(companyInfo.tel)}`">Позвонить в компанию</a>
					</div>
					<div class="contacts__map">
						<div class="contacts__map-tabs">
							<ul class="contacts__map-tabs-list">
								<li v-for="(tab, index) in mapTabs" :key="tab.coordinates"
									:class="{ 'is-active': index + 1 === activeTab }"
									class="contacts__map-tabs-item">
									<ClientOnly>
										<YandexMap :coordinates="tab.coordinates" :zoom="14" :controls="[]" :behaviors="['drag', 'dblClickZoom', 'multiTouch']" />
									</ClientOnly>
								</li>
							</ul>
						</div>

						<!-- <ClientOnly>
							<Transition name="map-tab">
								<YandexMap v-show="activeTab === 1"
									:coordinates="[55.776406, 37.690884]" :zoom="14" :controls="[]" :behaviors="['drag', 'dblClickZoom', 'multiTouch']" />
							</Transition>
							<Transition name="map-tab">
								<YandexMap v-show="activeTab === 2"
									:coordinates="[48.714417, 44.524459]" :zoom="14" :controls="[]" :behaviors="['drag', 'dblClickZoom', 'multiTouch']" />
							</Transition>
							<Transition name="map-tab">
								<YandexMap v-show="activeTab === 3"
									:coordinates="[59.939864, 30.314566]" :zoom="14" :controls="[]" :behaviors="['drag', 'dblClickZoom', 'multiTouch']" />
							</Transition>
						</ClientOnly> -->
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.contacts {}

.contacts__inner {
	padding: 54px 0 61px;
	background-color: #f5f7fa;
	border-radius: 30px;
}

.contacts__layout {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;
}

.contacts__info {
	padding-right: 20px;
}

.contacts__title {
	margin-bottom: 45px;
	font-family: var(--secondary-font-family);
	font-size: var(--section-title-fz);
	font-weight: 400;
	line-height: 1.12;
	color: #090c05;
}

.contacts__city-tabs {
	margin-bottom: 38px;
}

.contacts__city-tabs-list {
	--gap: 10px;
	display: flex;
	flex-wrap: wrap;
	margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));
}

.contacts__city-tabs-item {
	margin: var(--gap) 0 0 var(--gap);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5em 1.3em;
	font-size: 14px;
	font-weight: 400;
	color: #0c1832;
	border: 0.75px solid #0c1832;
	border-radius: 36px;
	opacity: 0.6;
	cursor: pointer;
}

.contacts__city-tabs-item.is-active {
	opacity: 1;
}

.contacts__address {
	margin-bottom: 56px;
	font-size: 22px;
	font-weight: 400;
	line-height: 1.36;
	color: #080a05;
}

.contacts__list {
	display: grid;
	gap: 20px;
	margin-bottom: 64px;
}

.contacts__item {
	font-size: 20px;
	font-weight: 400;
	color: #0c352c;
}

.contacts__item .hl {
	font-weight: 700;
}

.contacts__button {
	display: grid;
	grid-auto-flow: column;
	justify-content: center;
	align-items: center;
	gap: 8px;
	padding: 8px;
	font-family: var(--secondary-font-family);
	font-size: 28px;
	font-weight: 400;
	color: #1c1c1c;
	max-width: 519px;
	width: 100%;
	height: 97px;
	border: none;
	border-radius: 16px;
}

.contacts__button::before {
	content: "";
	width: 19px;
	height: 19px;
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	background-image: url("data:image/svg+xml,%3Csvg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 4.38024C0 5.91048 0.295808 6.27455 0.739521 7.61138C1.49042 9.87545 2.26407 10.9165 3.66916 12.6572C3.96497 13.0269 4.40868 13.4763 4.74431 13.812C4.83533 13.9087 4.85808 13.9713 4.94341 14.0566L6.32006 15.3138C6.80359 15.7234 7.29281 16.1329 7.82186 16.4856C9.09611 17.3332 9.8982 17.7713 11.3602 18.2548C11.5934 18.3287 11.7754 18.4141 12.0087 18.4937C12.7539 18.7554 13.482 18.9602 14.2159 19H14.7734C15.2683 18.9716 15.7746 18.8578 16.2922 18.6302C17.0772 18.2832 18.3174 17.6234 18.6245 16.8042C18.8521 16.2069 19 15.5868 19 14.8814C19 14.6425 18.7725 14.4832 18.6132 14.3751L16.8497 13.3967C16.662 13.3 16.4743 13.1805 16.2808 13.0781C16.0704 12.9587 15.8883 12.8563 15.6892 12.7368C14.4775 11.9746 14.3524 11.6048 13.0213 13.2829C11.7868 14.8302 11.747 14.7392 10.4557 13.9599C8.62395 12.8506 7.4521 11.9916 6.11527 10.2111C5.7 9.6479 5.40988 9.15868 5.0515 8.56707C4.28353 7.28713 4.14701 7.21317 5.7 5.99581C7.65689 4.45988 6.85479 4.43713 5.93892 2.7476C5.83084 2.55419 5.70569 2.3494 5.60329 2.1503L4.8012 0.694012C4.48263 0.113772 4.40868 0 3.89671 0C3.37904 0 2.61108 0.227545 2.22425 0.364072C1.10359 0.767964 0 3.1003 0 4.38024Z' fill='%231C1C1C' /%3E%3C/svg%3E");
}

.contacts__map {
	width: 100%;
	height: 100%;
	border-radius: 16px;
	overflow: hidden;
}

.contacts__map-tabs,
.contacts__map-tabs-list,
.contacts__map-tabs-item {
	width: 100%;
	height: 100%;
}

.contacts__map-tabs-item {
	display: none;
}

.contacts__map-tabs-item.is-active {
	display: block;
}

.yandex-container {
	height: 100%;
}

.yandex-container :deep([class$="map-copyrights-promo"]),
.yandex-container :deep([class$="copyright__wrap"]) {
	display: none;
}

.map-tab-enter-from,
.map-tab-leave-to {
	opacity: 0;
}

.map-tab-enter-active,
.map-tab-leave-active {
	transition: opacity 300ms ease;
}

@media (max-width: 1399.98px) {
	.contacts__button {
		font-size: 26px;
		max-width: 500px;
	}
}

@media (max-width: 1199.98px) {
	.contacts__address {
		margin-bottom: 45px;
	}

	.contacts__list {
		gap: 18px;
		margin-bottom: 50px;
	}
}

@media (max-width: 991.98px) {
	.contacts__inner {
		padding: 40px 0;
	}

	.contacts__layout {
		grid-template-columns: 100%;
		gap: 40px;
	}

	.contacts__info {
		padding-right: 0;
	}

	.contacts__title {
		margin-bottom: 30px;
	}

	.contacts__city-tabs {
		margin-bottom: 25px;
	}

	.contacts__city-tabs-list {
		--gap: 8px;
	}

	.contacts__city-tabs-item {
		font-size: 12px;
	}

	.contacts__address {
		margin-bottom: 30px;
		font-size: 20px;
	}

	.contacts__list {
		gap: 12px;
		margin-bottom: 40px;
	}

	.contacts__item {
		font-size: 18px;
	}

	.contacts__button {
		font-size: 22px;
		height: 80px;
		max-width: 410px;
	}

	.contacts__button::before {
		width: 16px;
		height: 16px;
	}

	.contacts__map {
		position: relative;
		height: 0;
		padding: calc(100% / (16 / 9)) 0 0;
	}

	.contacts__map-tabs {
		position: absolute;
		inset: 0;
	}
}

@media (max-width: 767.98px) {
	.contacts__button {
		font-size: 20px;
		height: 75px;
		max-width: 390px;
	}

	.contacts__address {
		font-size: 18px;
	}

	.contacts__list {
		gap: 8px;
		margin-bottom: 30px;
	}

	.contacts__item {
		font-size: 16px;
	}
}

@media (max-width: 575.98px) {
	.contacts__inner {
		padding: 30px 0;
	}

	.contacts__layout {
		gap: 30px;
	}

	.contacts__address {
		margin-bottom: 20px;
		font-size: 16px;
	}

	.contacts__button {
		font-size: 18px;
		height: 65px;
		max-width: 320px;
	}
}

@media (max-width: 479.98px) {
	.contacts__inner {
		border-radius: 20px;
	}

	.contacts__address {
		margin-bottom: 15px;
	}

	.contacts__city-tabs-list {
		--gap: 5px;
	}

	.contacts__city-tabs-item {
		font-size: 10px;
	}

	.contacts__list {
		margin-bottom: 20px;
	}

	.contacts__button {
		font-size: 16px;
		height: 60px;
		max-width: 290px;
	}

	.contacts__button::before {
		width: 12px;
		height: 12px;
	}

	.contacts__map {
		position: static;
		height: 250px;
		padding: 0;
	}

	.contacts__map-tabs {
		position: static;
	}
}

@media (max-width: 379.98px) {
	.contacts__city-tabs {
		margin-bottom: 20px;
	}

	.contacts__address {
		font-size: 14px;
	}

	.contacts__list {
		gap: 5px;
	}

	.contacts__item {
		font-size: 14px;
	}
}
</style>