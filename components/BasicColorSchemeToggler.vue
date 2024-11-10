<script setup>
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark({
	selector: "html",
	attribute: "data-color-mode",
	valueDark: "dark",
	valueLight: "light",
});

const toggleDark = useToggle(isDark);
</script>

<template>
	<div class="color-scheme-toggler" @click="toggleDark()"></div>
</template>

<style scoped>
.color-scheme-toggler {
	position: relative;
	--toggler-body-width: 34px;
	width: var(--toggler-body-width);
	height: 22px;
	border-radius: 34px;
	box-shadow: inset 0 3px 3px 0 rgba(0, 0, 0, 0.1);
	background-color: #ddd;
	cursor: pointer;
}

.color-scheme-toggler::before {
	content: "";
	position: absolute;
	top: 50%;
	left: 0;
	border-radius: 34px;
	--toggler-button-width: 26px;
	width: var(--toggler-button-width);
	height: 26px;
	box-shadow: 0 3px 11px 0 rgba(0, 0, 0, 0.25);
	background-color: #fff;
	transition: transform 250ms ease-in;
	--toggler-button-offset: 10px;
	transform: translateX(calc(-1 * var(--toggler-button-offset))) translateY(-50%);
}

html[data-color-mode="dark"] .color-scheme-toggler {
	background-color: #fee02e;
}

html[data-color-mode="dark"] .color-scheme-toggler::before {
	transform: translateX(calc(var(--toggler-body-width) - var(--toggler-button-width) + var(--toggler-button-offset))) translateY(-50%);
}
</style>