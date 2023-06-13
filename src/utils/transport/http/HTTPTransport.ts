import { DEFAULT_CACHE_TTL } from './constants';
import type { IHTTPTransport, RequestOptions } from './types';

// Transport layer is responsible for: storing endpoint and params, caching, and providing methods for different requests (get, post, put, delete, etc.).
export class HTTPTransport<T> implements IHTTPTransport<T> {
	constructor(public endpoint: string, public params: Record<string, string>, public ttl = DEFAULT_CACHE_TTL) {
		this.endpoint = endpoint;
		this.params = params;
		this.url = `${this.endpoint}?${new URLSearchParams(this.params).toString()}`;
		this.ttl = ttl;
	}
	request = (query: string, options: RequestOptions): Promise<T> => {
		return new Promise((resolve, reject) => {
			fetch(`${this.url}&${query}`, options)
				.then((response) => {
					if (response.status !== 200) {
						reject(response.statusText);
					}
					response.json().then((data) => {
						resolve(data);
					});
				})
				.catch((error) => {
					reject(error);
				});
		});
	}
	get(query: string, invalidateCache = false): Promise<T> {
		const cached = this.checkCache(query);
		if (cached && !invalidateCache) {
			return Promise.resolve(cached);
		}
		return this.request(query, { method: 'GET' }).then(data => {
			this.setCache(query, data);
			return data;
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