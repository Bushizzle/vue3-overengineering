import type { IHTTPTransport } from '../utils/transport';

export type RequestParams = Record<string, string>;

export interface EndpointTypes {
  HTTP: string;
  WS?: string;
}

export interface IApi<T> {
  HTTPTransport: IHTTPTransport<T>; // or IWSTransport<T> in the future;
  get: (params: RequestParams) => Promise<T>;
}
