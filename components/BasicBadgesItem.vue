<script setup></script>

<template>
	<li class="badges__item">
		<p class="badges__item-title">
			<slot name="title" />
		</p>
		<p class="badges__item-desc">
			<slot name="desc" />
		</p>
	</li>
</template>

<style scoped>
.badges__item {
	max-width: 184px;
	width: 100%;
	min-height: 100px;
	height: 100%;
	padding: 14px 20px;
	background-color: #fff;
	border-radius: 16px;
}

.badges__item-title {
	margin-bottom: 5px;
	font-size: 30px;
	font-weight: 600;
	color: #090c05;
}

.badges__item-desc {
	font-size: 14px;
	font-weight: 300;
	line-height: 1.21;
	color: #090c05;
}

@media (max-width: 1799.98px) {
	.badges__item {
		min-height: 95px;
	}

	.badges__item-title {
		font-size: 26px;
	}
}

@media (max-width: 1399.98px) {}
</style>