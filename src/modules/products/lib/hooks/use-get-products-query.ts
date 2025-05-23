import { useQuery } from '@tanstack/react-query';

import { QueryBaseKey } from '@/lib/enums';
import type { HttpError } from '@/lib/modules/http';
import type { ApiResponse } from '@/lib/types';
import { convertFiltersToQuery } from '@/lib/utils';

import { productsApi } from '../api';
import type { Product, ProductFilters } from '../types';

export const useGetProductsQuery = (filters: ProductFilters, enabled: boolean = true) => {
	return useQuery<ApiResponse<Product[]>, HttpError>({
		queryKey: [QueryBaseKey.PRODUCTS, filters],
		queryFn: async () => {
			const query = convertFiltersToQuery(filters);

			const { data, meta } = await productsApi.getProducts(query);

			return {
				data,
				meta
			};
		},
		placeholderData: {
			data: []
		},
		enabled
	});
};
