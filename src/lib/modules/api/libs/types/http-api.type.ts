import type { HttpApiOptions } from './http-api-options.type';

type HttpApi = {
	request<T>(
		path: string,
		options: HttpApiOptions
	): Promise<{
		data: T;
		status: number;
		headers: Headers;
	}>;
};

export { type HttpApi };
