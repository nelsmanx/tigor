<script setup></script>

<template>
	<div class="section-header">
		<div class="container">
			<div class="section-header__inner">
				<h2 class="section-header__title">
					<slot name="title"></slot>
				</h2>
				<div class="section-header__group">
					<p class="section-header__desc">
						<slot name="desc"></slot>
					</p>
					<img class="section-header__logo" src="/images/logo.svg" alt="Логотип компании">
				</div>
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
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;
	align-items: center;
}

.section-header__title {
	font-family: var(--secondary-font-family);
	font-size: 52px;
	font-weight: 400;
	color: #1c1c1c;
}

.section-header__group {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.section-header__desc {
	margin-right: 20px;
	font-size: 22px;
	font-weight: 400;
	line-height: 1.36;
	color: #080a05;
}

.section-header__logo {
	width: 172px;
}
</style>