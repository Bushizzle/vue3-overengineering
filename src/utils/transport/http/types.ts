type HTTPTransportCache<T> = Map<string, HTTPTransportCacheRecord<T>>;
interface HTTPTransportCacheRecord<T> {
  ttl: number;
  data: T;
}
export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';
export interface RequestOptions {
  method: RequestMethod;
  body?: string;
  headers?: Record<string, string>;
}

export interface IHTTPTransport<T> {
  get: (query: string, f: boolean) => Promise<T> | HTTPTransportCacheRecord<T>;
  checkCache: (query: string) => T | undefined;
  setCache: (query: string, data: unknown, ttl: number) => void;
  loadCache: () => void;
  endpoint: string;
  url: string;
  params: Record<string, string | number | boolean>;
  ttl: number;
  cache: HTTPTransportCache<T>;
}
