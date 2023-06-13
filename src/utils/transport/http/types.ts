type HTTPTransportCache<T> = Map<string, HTTPTransportCacheRecord<T>>;
type HTTPTransportCacheRecord<T> = {
	ttl: number;
	data: T;
};
export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';
export type RequestOptions = {
	method: RequestMethod;
	body?: string;
	headers?: Record<string, string>;
};

export interface IHTTPTransport<T> {
	get(query: string, f: boolean): Promise<T>;
	checkCache(query: string): HTTPTransportCacheRecord<T> | undefined;
	setCache(query: string, data: any, ttl: number): void;
	endpoint: string;
	url: string;
	params: { [prop: string]: string | number | boolean };
	ttl: number;
	cache: HTTPTransportCache<T>;
}
