<script setup>
defineProps({
	badges: {
		type: Array,
		required: true,
	}
});
</script>

<template>
	<div class="badges">
		<ul class="badges__list">
			<li v-for="badge in badges" :key="badge.title" class="badges__item">
				<p class="badges__item-title">{{ badge.title }}</p>
				<p class="badges__item-desc">{{ badge.desc }}</p>
			</li>
		</ul>
	</div>

</template>

<style scoped></style>