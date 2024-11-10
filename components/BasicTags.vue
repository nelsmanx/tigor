<script setup>
defineProps({
	tags: {
		type: Array,
		required: true
	}
});
</script>

<template>
	<div class="tags">
		<ul class="tags__list">
			<li v-for="tag in tags" :key="tag" class="tags__item">{{ tag }}</li>
		</ul>
	</div>
</template>

<style scoped>
.tags {}

.tags__list {
	--gap: 10px;
	display: flex;
	flex-wrap: wrap;
	margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));
}

.tags__item {
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
}
</style>