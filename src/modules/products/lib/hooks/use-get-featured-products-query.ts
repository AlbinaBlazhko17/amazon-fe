import { useQuery } from '@tanstack/react-query';

import { QueryBaseKey } from '@/lib/enums';
import type { HttpError } from '@/lib/modules/http';
import type { ApiResponse } from '@/lib/types';

import { productsApi } from '../api';
import type { Product } from '../types';

export const useGetFeaturedProductsQuery = () => {
	return useQuery<ApiResponse<Product[]>, HttpError>({
		queryKey: [QueryBaseKey.FEATURED_PRODUCTS],
		queryFn: async () => {
			return await productsApi.getFeaturedProducts();
		}
	});
};
