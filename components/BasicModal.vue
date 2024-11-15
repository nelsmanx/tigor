<script setup>
defineProps({
	id: {
		type: String,
		required: true
	}
});
</script>

<template>
	<Teleport to="body">
		<div class="modal fade" :id="id" tabindex="-1" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<slot />
				</div>
			</div>
		</div>
	</Teleport>
</template>

<style>
.modal-content {
	display: block;
	color: unset;
	background-color: unset;
	border: unset;
	border-radius: unset;
}

@media (max-width: 575.98px) {
	.modal {
		padding: 15px !important;
	}

	.modal-dialog {
		margin-top: 10px;
		margin-inline: auto;
	}
}
</style>