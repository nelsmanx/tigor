<script setup>
	import { useAppStore } from '~/stores/appStore';
	import { emitter } from './services/MittService';

	const appStore = useAppStore();

	appStore.init();
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<style src="bootstrap/dist/css/bootstrap.min.css"></style>
<style src="~/assets/css/basic.css"></style>
<style src="~/assets/css/fonts.css"></style>