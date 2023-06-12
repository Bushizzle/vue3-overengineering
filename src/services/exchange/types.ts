import { Store } from 'pinia';
import { IApi } from '../../api';

export type Pair = [string, string];
export interface IExchangeService<T> {
	api: IApi<T>;
	store: Store;
	getRate(): Promise<T>;
	useStore(): Store;
}