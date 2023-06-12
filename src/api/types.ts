import type { IHTTPTransport } from '../utils/transport';
export type RequestProps = Record<string, string>;
export interface IApi<T>  {
	params: RequestProps;
	endpoint: string;
	transport: IHTTPTransport<T>; // or IWSTransport<T> in the future;
	request: (params: RequestProps) => Promise<T>;
}