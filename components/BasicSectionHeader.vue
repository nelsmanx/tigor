<script setup></script>

<template>
	<div class="section-header">
		<div class="container">
			<div class="section-header__inner">
				<h2 class="section-header__title">
					<slot name="title"></slot>
				</h2>
				<p class="section-header__desc">
					<slot name="desc"></slot>
				</p>
				<img class="section-header__logo" src="/images/logo.svg" alt="Логотип компании">
			</div>
		</div>
	</div>
</template>

<style scoped>
.section-header {
	padding-block: 45px;
	border-bottom: 1px solid #e3e3e3;
}

.section-header__inner {
	display: grid;
	grid-template-areas: "title desc logo";
	grid-template-columns: calc(50% + 15px) auto 1fr;
	/* gap: 30px; */
	align-items: center;
}

.section-header__title {
	grid-area: title;
	font-family: var(--secondary-font-family);
	font-size: var(--section-title-fz);
	font-weight: 400;
	color: #1c1c1c;
}

/* .section-header__group {
	display: flex;
	justify-content: space-between;
	align-items: center;
} */
.section-header__desc {
	grid-area: desc;
	margin-right: 20px;
	font-size: 22px;
	font-weight: 400;
	line-height: 1.36;
	color: #080a05;
}

.section-header__logo {
	grid-area: logo;
	width: 172px;
	margin-left: auto;
}

@media (max-width: 1599.98px) {
	.section-header__desc {
		margin-right: 0;
		font-size: 20px;
	}
}

@media (max-width: 1499.98px) {
	.section-header__inner {
		grid-template-areas:
			"title  logo"
			"desc desc";
		grid-template-columns: 1fr auto;
		align-items: start;
		row-gap: 10px;
		column-gap: 30px;
	}
}

@media (max-width: 1399.98px) {
	.section-header {
		padding-block: 40px;
	}

	.section-header__inner {
		row-gap: 5px;
	}

	.section-header__desc {
		font-size: 18px;
	}
}

@media (max-width: 991.98px) {
	.section-header {
		padding-block: 30px;
	}

	.section-header__desc {
		font-size: 16px;
	}

	.section-header__logo {
		width: 140px;
	}
}

@media (max-width: 767.98px) {
	.section-header__logo {
		width: 110px;
	}
}

@media (max-width: 575.98px) {
	.section-header__inner {
		grid-template-areas:
			"logo"
			"title"
			"desc";
		grid-template-columns: 100%;
		gap: 0;
	}

	.section-header__logo {
		margin-inline: auto;
		margin-bottom: 15px;
	}

	.section-header__title {
		margin-bottom: 8px;
		text-align: center;
	}

	.section-header__desc {
		text-align: center;
	}
}

@media (max-width: 479.98px) {
	.section-header__logo {
		width: 90px;
	}

	.section-header__desc {
		font-size: 14px;
	}
}
</style>