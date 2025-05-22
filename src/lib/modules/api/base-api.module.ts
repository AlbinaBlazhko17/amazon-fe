import { ContentType, HttpCode, HttpError, HttpHeader, type HttpModule } from '@/lib/modules/http';
import { type Storage, StorageKey } from '@/lib/modules/storage';
import type { ApiErrorResponse, ApiResponse, ValueOf } from '@/lib/types';
import { configureUrlString, convertSnakeToCamelCase } from '@/lib/utils';

import type { HttpApi, HttpApiOptions } from './libs/types';

type Constructor = {
	baseUrl: string;
	http: HttpModule;
	path: string;
	storage: Storage;
};

class BaseApi implements HttpApi {
	private baseUrl: string;

	private http: HttpModule;

	private path: string;

	private storage: Storage;

	public constructor({ baseUrl, http, path, storage }: Constructor) {
		this.baseUrl = baseUrl;
		this.http = http;
		this.path = path;
		this.storage = storage;
	}

	public async request<T>(path: string, options: HttpApiOptions): Promise<T> {
		const {
			method,
			body = null,
			query,
			contentType = ContentType.JSON,
			hasAuth = false,
			...restOptions
		} = options;

		try {
			const headers = await this.getHeaders(contentType, hasAuth);
			const response = await this.http.request(this.getUrl(path, query), {
				method,
				body,
				headers,
				...restOptions
			});

			return await this.handleResponse<T>(response);
		} catch (error) {
			if (error instanceof HttpError) {
				throw error;
			}

			throw new HttpError({
				message: error instanceof Error ? error.message : 'Unknown error occurred',
				status: HttpCode.INTERNAL_SERVER_ERROR
			});
		}
	}

	private async getHeaders(
		contentType: ValueOf<typeof ContentType> | undefined,
		hasAuth: boolean
	): Promise<Headers> {
		const headers = new Headers();

		if (contentType) {
			headers.append(HttpHeader.CONTENT_TYPE, contentType);
		}

		if (hasAuth) {
			const token = await this.storage.get<string>(StorageKey.TOKEN);

			if (token) {
				headers.append(HttpHeader.AUTHORIZATION, `Bearer ${token}`);
			}
		}

		return headers;
	}

	private getUrl<T extends Record<string, unknown>>(
		path: string,
		queryParameters?: T | undefined
	): string {
		if (!queryParameters) {
			return path;
		}

		const query = new URLSearchParams(queryParameters as Record<string, string>).toString();

		return `${path}?${query}`;
	}

	protected getFullEndpoint<T extends Record<string, string>>(
		...parameters: [...string[], T]
	): string {
		const copiedParameters = [...parameters];

		const options = copiedParameters.pop() as T;

		return configureUrlString(this.baseUrl, this.path, ...(copiedParameters as string[]), options);
	}

	private async handleResponse<T>(response: Response): Promise<T> {
		if (!response.ok) {
			await this.handleError(response);
		}

		return this.parseResponse<T>(response);
	}

	private async parseResponse<T>(response: Response): Promise<T> {
		try {
			const contentType = response.headers.get(HttpHeader.CONTENT_TYPE);

			if (contentType && contentType.includes(ContentType.JSON)) {
				const parsedResponse = await response.json();
				return convertSnakeToCamelCase(parsedResponse) as T;
			}

			const textResponse = await response.text();
			if (!textResponse) {
				return null as T;
			}

			try {
				const jsonResponse: ApiResponse = JSON.parse(textResponse);
				return convertSnakeToCamelCase(jsonResponse) as T;
			} catch {
				return textResponse as T;
			}
		} catch {
			throw new HttpError({
				message: response.statusText ?? 'Response parsing error',
				status: response.status as ValueOf<typeof HttpCode>
			});
		}
	}

	private async handleError(response: Response): Promise<never> {
		const parsedException = await this.parseResponse<ApiErrorResponse | string>(response);

		if (!parsedException || typeof parsedException === 'string') {
			throw new HttpError({
				message: parsedException,
				status: response.status as ValueOf<typeof HttpCode>
			});
		}

		const errorMessage =
			'message' in parsedException ? parsedException.message : parsedException.error;

		throw new HttpError({
			details: parsedException,
			message: errorMessage,
			status: response.status as ValueOf<typeof HttpCode>
		});
	}
}

export { BaseApi };
