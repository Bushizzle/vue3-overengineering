import { HTTPTransport } from '../utils/transport';
import type { IApi, RequestParams, EndpointTypes } from './types';

// Api layer is responsible for: storing different transport types (HTTP, WS, etc.), and providing methods (get, post, subscribe to WS, etc.).
export class Api<T> implements IApi<T> {
  constructor(endpoints: EndpointTypes, params: RequestParams, ttl: number) {
    this.HTTPTransport = new HTTPTransport<T>(endpoints.HTTP, params, ttl);
  }

  HTTPTransport;
  async get(params: RequestParams) {
    return await this.HTTPTransport.get(new URLSearchParams(params).toString());
  }
}
