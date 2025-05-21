import { type HttpModule, type HttpOptions } from './libs/types';

class BaseHttp implements HttpModule {
	public request(path: string, options: HttpOptions): Promise<Response> {
		const { headers, method, body, next, ...restOptions } = options;

		return fetch(path, {
			body,
			headers,
			method,
			next,
			...restOptions
		});
	}
}

export { BaseHttp };
