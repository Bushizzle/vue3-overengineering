import { defineStore } from 'pinia';
import type { UserSettings } from './types';

export const useUserStore = defineStore('user', {
	state: () => ({
		settings: {
			graph_visible: true,
			list_visible: true,
		},
		graph_visible: true,
		list_visible: true,
	}),
	actions: {
		change(key: keyof UserSettings, value: boolean) {
			this.settings = {
				...this.settings,
				[key]: value,
			}
		},
	},
});