<script setup>
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark({
	selector: "html",
	attribute: "data-color-scheme",
	valueDark: "dark",
	valueLight: "light",
});

const toggleDark = useToggle(isDark);

const colorSchemeTitle = computed(() => isDark.value ? 'Темная тема' : 'Светлая тема');
</script>

<template>
	<div class="color-scheme">
		<ClientOnly>
			<p class="color-scheme__title">{{ colorSchemeTitle }}</p>
		</ClientOnly>
		<div class="color-scheme__toggler" @click="toggleDark()"></div>
	</div>

</template>

<style scoped>
:global(:root) {
	--color-scheme-toggler-bg: #ddd;
}

:global(:root[data-color-scheme="dark"]) {
	--color-scheme-toggler-bg: #fee02e;
}

.color-scheme {}

.color-scheme__title {
	margin-bottom: 12px;
	font-weight: 400;
	font-size: 13px;
	text-align: center;
	color: var(--font-basic);
}

.color-scheme__toggler {
	position: relative;
	--toggler-body-width: 34px;
	width: var(--toggler-body-width);
	height: 22px;
	margin-inline: auto;
	border-radius: 34px;
	box-shadow: inset 0 3px 3px 0 rgba(0, 0, 0, 0.1);
	background-color: var(--color-scheme-toggler-bg);
	cursor: pointer;
}

.color-scheme__toggler::before {
	content: "";
	position: absolute;
	top: 50%;
	left: 0;
	border-radius: 34px;
	--toggler-button-diameter: 26px;
	width: var(--toggler-button-diameter);
	height: var(--toggler-button-diameter);
	box-shadow: 0 3px 11px 0 rgba(0, 0, 0, 0.25);
	background-color: #fff;
	transition: transform 250ms ease-in;
	--toggler-button-offset: 10px;
	transform: translateX(calc(-1 * var(--toggler-button-offset))) translateY(-50%);
}

html[data-color-scheme="dark"] .color-scheme__toggler::before {
	transform: translateX(calc(var(--toggler-body-width) - var(--toggler-button-diameter) + var(--toggler-button-offset))) translateY(-50%);
}

@media (max-width: 1599.98px) {
	.color-scheme__title {
		width: min-content;
		margin-bottom: 0;
		margin-right: 25px;
	}
}

@media (max-width: 479.98px) {
	.color-scheme__title {
		margin-right: 20px;
		font-size: 7px;
	}

	.color-scheme__toggler {
		--toggler-body-width: 28px;
		height: 17px;
		border-radius: 27px;
	}

	.color-scheme__toggler::before {
		--toggler-button-diameter: 21px;
		--toggler-button-offset: 10px;
	}
}
</style>