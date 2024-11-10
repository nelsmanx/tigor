<script setup></script>

<template>
	<div class="badges">
		<ul class="badges__list">
			<slot />
		</ul>
	</div>
</template>

<style scoped>
.badges__list {
	display: grid;
	grid-auto-flow: column;
	gap: 13px;
}
</style>