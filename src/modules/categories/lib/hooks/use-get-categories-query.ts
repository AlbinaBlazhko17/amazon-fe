import { useQuery } from '@tanstack/react-query';

import { QueryBaseKey } from '@/lib/enums';
import type { HttpError } from '@/lib/modules/http';
import type { ApiResponse } from '@/lib/types';

import { categoriesApi, transformCategoryResponse } from '../api';
import type { Category } from '../types';

export const useGetCategoriesQuery = () => {
	return useQuery<ApiResponse<Category[]>, HttpError>({
		queryKey: [QueryBaseKey.CATEGORIES],
		queryFn: async () => {
			const response = await categoriesApi.getCategories();

			const data = response.data.map(category => transformCategoryResponse(category));

			return {
				...response,
				data
			};
		},
		placeholderData: {
			data: []
		}
	});
};
