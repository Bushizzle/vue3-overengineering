import { DEFAULT_CACHE_TTL } from './constants';
import type { IHTTPTransport } from './types';
export class HTTPTransport<T> implements IHTTPTransport<T> {
	constructor(public endpoint: string, public params: Record<string, string>, public ttl = DEFAULT_CACHE_TTL) {
		this.endpoint = endpoint;
		this.params = params;
		this.url = `${this.endpoint}?${new URLSearchParams(this.params).toString()}`;
		this.ttl = ttl;
	}
	get(query: string, f = false): Promise<T> {
		return new Promise((resolve, reject) => {
			const cached = this.checkCache(query);
			if (cached && !f) {
				resolve(cached);
				return;
			} else {
				fetch(`${this.url}&${query}`)
					.then((response) => {
						if (response.status !== 200) {
							reject(response.statusText);
						}
						response.json().then((data) => {
							resolve(data);
							this.setCache(query, data);
						});
					})
					.catch((error) => {
						reject(error);
					});
			}
		});
	};
	checkCache(query: string) {
		if (this.cache.has(query)) {
			const cached = this.cache.get(query);
			if (cached.ttl > Date.now()) {
				return cached.data;
			} else {
				this.cache.delete(query);
			}
		}
	};
	setCache(query: string, data: unknown) {
		this.cache.set(query, {
			data,
			ttl: Date.now() + this.ttl,
		});
	}
	url;
	cache = new Map();
}