import { useGetFeaturedProductsQuery } from '@/modules/products';

export const useFeaturedProducts = () => {
	const { data, isLoading } = useGetFeaturedProductsQuery();

	return {
		products: data?.data || [],
		isLoading
	};
};
