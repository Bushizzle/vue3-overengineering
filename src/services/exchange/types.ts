import { Store } from 'pinia';
import { IApi } from '../../api';

export interface IExchangeService<T> {
	api: IApi<T>;
	getRate(from: string, to: string): Promise<T>;
	useStore(): Store;
	changeFrom(value: string): void;
	changeTo(value: string): void;
	swapCurrencies(): void;
}