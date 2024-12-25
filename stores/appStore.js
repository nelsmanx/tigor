import { defineStore } from 'pinia';
import { emitter } from '~/services/MittService';
import ApiService from '~/services/ApiService';

export const useAppStore = defineStore('appStore', {
	state: () => {
		return {
			loader: 0,
		};
	},
	actions: {
		init() {
			emitter.on('loader', (value) => {
				this.loader += value;
			});
		},
	}
});
