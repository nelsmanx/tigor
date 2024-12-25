<script setup>
const companyInfo = useCompanyInfo();
</script>

<template>
	<div class="socials">
		<ul class="socials__list">
			<li class="socials__item">
				<a class="socials__item-link socials__item-link--wa" :href="`https://wa.me/${companyInfo.formatTel(companyInfo.tel)}`"></a>
			</li>
			<li class="socials__item">
				<a class="socials__item-link socials__item-link--tg" :href="`https://t.me/+${companyInfo.formatTel(companyInfo.tel)}`"></a>
			</li>
		</ul>
	</div>
</template>

<style scoped>
.socials {
	width: fit-content;
}

.socials__list {
	display: grid;
	grid-auto-flow: column;
	gap: 4px;
}

.socials__item {}

.socials__item-link {
	display: block;
	--diameter: 39px;
	width: var(--diameter);
	height: var(--diameter);
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 50%;
}

.socials__item-link--wa {
	background-image: url("/images/socials/1.svg");
}

.socials__item-link--tg {
	background-image: url("/images/socials/2.svg");
}
</style>