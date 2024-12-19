import Inputmask from "inputmask";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.directive('inputmaskTel', {
		mounted: (el) => {
			const inputMask = new Inputmask({
				mask: "+9 (999) 999-99-99",
				placeholder: "_",
				showMaskOnHover: false,
			});
			inputMask.mask(el);

			el.addEventListener('focus', () => {
				if (!el.value) {
					el.value = '+79';
					el.setSelectionRange(0, 0);
				}
			});
		}
	});
});