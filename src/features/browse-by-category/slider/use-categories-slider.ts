import { useGetCategoriesQuery } from '@/modules/categories';

export const useCategoriesSlider = () => {
	const { data: body } = useGetCategoriesQuery();

	return {
		categories: body?.data || []
	};
};
