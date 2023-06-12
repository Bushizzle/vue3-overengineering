import type { IApi, RequestProps } from './types';
import { HTTPTransport } from '../utils/transport';

//
export class Api<T> implements IApi<T> {
	constructor(public endpoint: string, public params: RequestProps, ttl: number) {
		this.transport = new HTTPTransport<T>(endpoint, params, ttl);
	}
	transport;
	request(params: RequestProps) {
		return this.transport.get(new URLSearchParams(params).toString());
	}
}
