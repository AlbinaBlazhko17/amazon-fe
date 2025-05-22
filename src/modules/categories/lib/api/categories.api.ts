import { ApiPath } from '@/lib/enums';
import { BaseApi } from '@/lib/modules/api';
import { APP_CONFIG } from '@/lib/modules/config';
import { HttpMethod, type HttpModule, http } from '@/lib/modules/http';
import { type Storage, storage } from '@/lib/modules/storage';
import type { ApiResponse } from '@/lib/types';

import type { CategoryResponse } from '../types';

type Constructor = {
	baseUrl: string;
	http: HttpModule;
	storage: Storage;
};

export class CategoriesApi extends BaseApi {
	constructor({ baseUrl, http, storage }: Constructor) {
		super({ path: APP_CONFIG.ENV.API.BASE_PATH + ApiPath.CATEGORIES, baseUrl, http, storage });
	}

	public async getCategories() {
		const { data, meta } = await this.request<ApiResponse<CategoryResponse[]>>(
			this.getFullEndpoint('', {}),
			{
				method: HttpMethod.GET
			}
		);

		return {
			data,
			meta
		};
	}
}

const categoriesApi = new CategoriesApi({
	baseUrl: APP_CONFIG.ENV.API.ORIGIN_URL,
	storage,
	http
});

export { categoriesApi };
