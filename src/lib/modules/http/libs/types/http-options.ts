import { type HttpMethodNonBody, type HttpMethodWithBody } from './http-method.js';

type MethodBodyOptions =
	| { method: HttpMethodWithBody; body?: RequestInit['body'] }
	| { method: HttpMethodNonBody; body?: never };

type HttpOptions = MethodBodyOptions & {
	headers: Headers;
	next?: NextFetchRequestConfig;
	cache?: RequestCache;
	signal?: AbortSignal;
};

export { type HttpOptions, type MethodBodyOptions };
