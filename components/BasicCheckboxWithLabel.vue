<script setup></script>

<template>
	<label class="checkbox__label">
		<span class="checkbox__style-wrap">
			<input class="checkbox__default-input" type="checkbox" checked required>
			<span class="checkbox__style"></span>
		</span>
		<span class="checkbox__label-title">
			<slot />
		</span>
	</label>
</template>

<style scoped>
.checkbox__label {
	line-height: 1.2;
	cursor: pointer;
}

.checkbox__default-input {
	position: absolute;
	z-index: -1;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: 0;
	opacity: 0;
}

.checkbox__default-input::-ms-check {
	display: none;
}

.checkbox__style-wrap {
	position: relative;
	top: 0px;
	display: inline-block;
	margin-right: 3px;
}

.checkbox__style {
	display: block;
	width: 11px;
	height: 11px;
	background-color: transparent;
	border: 1.2px solid #1c1c1c;
	border-radius: 2px;
}

.checkbox__label-title {
	font-size: 16px;
	font-weight: 300;
	color: #1c1c1c;
	user-select: none;
}

.checkbox__default-input:checked + .checkbox__style::before {
	content: "";
	position: absolute;
	top: 50%;
	left: 50%;
	width: 7px;
	height: 5px;
	background-size: contain;
	background-repeat: no-repeat;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11.01 8.22'%3E%3Cpath fill='%231c1c1c' d='M3.86,8.22A1,1,0,0,1,3.12,8L.3,5.13a1,1,0,0,1,0-1.41,1,1,0,0,1,1.41,0L3.79,5.81,9.3.3a1,1,0,0,1,1.4,0,1,1,0,0,1,0,1.41L4.46,8a1,1,0,0,1-.74.27Z' /%3E%3C/svg%3E");
	transform: translate(-50%, -50%);
}
</style>