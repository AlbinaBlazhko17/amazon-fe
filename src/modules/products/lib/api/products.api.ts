import { ApiPath } from '@/lib/enums';
import { BaseApi } from '@/lib/modules/api';
import { APP_CONFIG } from '@/lib/modules/config';
import { HttpMethod, type HttpModule, http } from '@/lib/modules/http';
import { type Storage, storage } from '@/lib/modules/storage';
import type { ApiResponse } from '@/lib/types';

import { ProductsApiPath } from '../enums';
import type { Product } from '../types';

type Constructor = {
	baseUrl: string;
	http: HttpModule;
	storage: Storage;
};

export class ProductsApi extends BaseApi {
	public constructor({ baseUrl, http, storage }: Constructor) {
		super({ path: APP_CONFIG.ENV.API.BASE_PATH + ApiPath.PRODUCTS, baseUrl, http, storage });
	}

	public async getProducts(query: string) {
		const { data, meta } = await this.request<ApiResponse<Product[]>>(
			this.getFullEndpoint('' + query, {}),
			{
				method: HttpMethod.GET
			}
		);

		return {
			data,
			meta
		};
	}

	public async getFeaturedProducts() {
		const { data } = await this.request<ApiResponse<Product[]>>(
			this.getFullEndpoint(ProductsApiPath.FEATURED, {}),
			{
				method: HttpMethod.GET
			}
		);

		return {
			data
		};
	}
}

const productsApi = new ProductsApi({
	baseUrl: APP_CONFIG.ENV.API.ORIGIN_URL,
	storage,
	http
});

export { productsApi };
