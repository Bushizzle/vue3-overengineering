import { type Store } from 'pinia';
import { type IApi } from '../../api';

export interface IExchangeService<T> {
  api: IApi<T>;
  getRate: (from: string, to: string) => Promise<T>;
  useStore: () => Store;
  changeFrom: (value: string) => void;
  changeTo: (value: string) => void;
  swapCurrencies: () => void;
}
