<script setup>
defineProps({
	id: {
		type: String,
		required: true
	}
});

const showModal = defineModel(false);
const { $bootstrap } = useNuxtApp();
const modalRef = ref(null);

onMounted(() => {
	const modal = new $bootstrap.Modal(modalRef.value, {});
	modalRef.value.addEventListener("hide.bs.modal", () => showModal.value = false);

	watch(showModal, newState => {
		if (newState) modal.show();
		if (!newState) modal.hide();
	});
});
</script>

<template>
	<Teleport to="body">
		<div ref="modalRef" class="modal fade" :id tabindex="-1" aria-hidden="true">
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