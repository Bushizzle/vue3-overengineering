import { Logger } from '../../logger';
import type { IHTTPTransport, RequestOptions } from './types';
import { DEFAULT_CACHE_TTL } from './constants';

// Transport layer is responsible for: storing endpoint and params, caching, and providing methods for different requests (get, post, put, delete, etc.).
export class HTTPTransport<T> implements IHTTPTransport<T> {
  constructor(public endpoint: string, public params: Record<string, string>, public ttl = DEFAULT_CACHE_TTL) {
    this.endpoint = endpoint;
    this.params = params;
    this.url = `${this.endpoint}?${new URLSearchParams(this.params).toString()}`;
    this.ttl = ttl;
    this.loadCache();
  }

  loadCache = () => {
    const data = localStorage.getItem(this.url);
    if (data) {
      try {
        const cache = JSON.parse(data);
        Object.keys(cache).forEach(key => {
          const { ttl } = cache[key];
          if (Date.now() - ttl < this.ttl) {
            this.cache.set(key, cache[key]);
          }
        });
      } catch (error) {
        Logger.error('HTTPTransport: loadCache: data is not valid', data);
      }
    }
  };

  request = async (query: string, options: RequestOptions): Promise<T> => {
    return await new Promise((resolve, reject) => {
      fetch(`${this.url}&${query}`, options)
        .then(response => {
          if (response.status !== 200) {
            reject(response.statusText);
          }
          response.json().then(data => {
            resolve(data);
          });
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  async get(query: string, invalidateCache = false): Promise<T> {
    const cached = this.checkCache(query);
    if (cached && !invalidateCache) {
      return await Promise.resolve(cached);
    }
    return await this.request(query, { method: 'GET' }).then(data => {
      this.setCache(query, data);
      return data;
    });
  }

  checkCache(query: string) {
    if (this.cache.has(query)) {
      const cached = this.cache.get(query);
      if (cached.ttl > Date.now()) {
        return cached.data;
      } else {
        this.cache.delete(query);
      }
    }
  }

  setCache(query: string, data: unknown) {
    this.cache.set(query, {
      data,
      ttl: Date.now() + this.ttl,
    });
    localStorage.setItem(this.url, JSON.stringify(Object.fromEntries(this.cache)));
  }

  url;
  cache = new Map();
}
