type HTTPTransportCache<T> = Map<string, HTTPTransportCacheRecord<T>>;
type HTTPTransportCacheRecord<T> = {
	ttl: number;
	data: T;
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
