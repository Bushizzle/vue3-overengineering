import { Api, IApi, RequestParams } from '../../api';
import { useExchangeStore } from './store';
import type { IExchangeService } from './types';
import {Logger} from "../../utils/logger";

export class ExchangeService<T extends { data: { [key: string]: number } }> implements IExchangeService<T> {
	constructor(endpoint: string, params: RequestParams) {
		this.api = new Api<T>({ HTTP: endpoint }, params, 60000);
		this.getRate(this.store.from, this.store.to).then(({ data }) => {
			if (this.store.to in data) {
				this.store.changeRate(data[this.store.to]);
			} else {
				Logger.error('ExchangeService: getRate: data is not valid', data);
			}
		});
	};
	store = useExchangeStore();
	api: IApi<T>;

	public useStore = () => this.store;
	public async getRate(from: string, to: string): Promise<T> {
		return this.api.get({
			base_currency: from,
			currencies: to,
		});
	};

	public changeFrom = (value: string) => {;
		void this.getRate(value, this.store.to).then(({ data }) => {
			if (data.hasOwnProperty(this.store.to)) {
				this.store.changeFrom(value);
				this.store.changeRate(data[this.store.to]);
			} else {
				Logger.error('ExchangeService: getRate: data is not valid', data);
			}
		});
	};
	public changeTo = (value: string) =>  {
		void this.getRate(this.store.from, value).then(({ data }) => {
			if (data.hasOwnProperty(value)) {
				this.store.changeTo(value);
				this.store.changeRate(data[value]);
			} else {
				Logger.error('ExchangeService: getRate: data is not valid', data);
			}
		});
	}
	public swapCurrencies = () => {
		const from = this.store.to;
		const to = this.store.from;
		this.getRate(to, from).then(({ data }) => {
			if (from in data) {
				this.store.changeRate(data[this.store.to]);
				this.store.changeTo(to);
				this.store.changeFrom(from);
			} else {
				Logger.error('ExchangeService: getRate: data is not valid', data);
			}
		});
	}
	public changeAmount = (value: string) => this.store.changeAmount(+value);
}