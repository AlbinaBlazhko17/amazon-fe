import { useGetCategoriesQuery } from '@/modules/categories';

export const useSubnavCategories = () => {
	const { data: categories } = useGetCategoriesQuery();

	return {
		categories: categories?.data ?? []
	};
};
