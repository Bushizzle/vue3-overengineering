import { Api, IApi, RequestProps } from '../../api';
import { useExchangeStore } from './store';
import type { IExchangeService } from './types';

export class ExchangeService<T> implements IExchangeService<T> {
	constructor(endpoint: string, params: RequestProps) {
		this.api = new Api<T>(endpoint, params, 60000);
	};
	store = useExchangeStore();
	api: IApi<T>;

	useStore = () => this.store;
	async getRate(): Promise<T> {
		return this.api.request({
			base_currency: this.store.from,
			currencies: this.store.to,
		});
	};
}