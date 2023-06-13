import { defineStore } from 'pinia';
import { CURRENCIES, DEFAULT_PAIR, RANGE_OF_EXCHANGES } from './constants';

export const useExchangeStore = defineStore('exchange', {
	state: () => ({
		from: DEFAULT_PAIR[0],
		to: DEFAULT_PAIR[1],
		amount: 1,
		rate: 1,
		currencies: CURRENCIES,
		units: RANGE_OF_EXCHANGES,
	}),
	actions: {
		changeFrom(value: string) {
			console.log(value);
			this.from = value;
		},
		changeTo(value: string) {
			this.from = value;
		},
		changeAmount(value: number) {
			this.amount = value;
		},
		changeRate(value: number) {
			this.rate = value;
			console.log(value, value === this.rate);
		},
	},
})