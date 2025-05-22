import type { TIcons } from '@/components/common';

import type { Category, CategoryResponse } from '../types';

export const transformCategoryResponse = (category: CategoryResponse): Category => ({
	id: category.id,
	name: category.name,
	slug: category.slug,
	icon: category.slug as TIcons
});
