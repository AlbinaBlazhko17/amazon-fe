import { Icon, Text } from '@/components/common';

import type { Category } from '@/modules/categories';

interface CategoryCardProps {
	category: Category;
}

export const CategoryCard = ({ category }: CategoryCardProps) => (
	<div
		className={
			'flex h-full flex-col items-center justify-center gap-1 rounded-2xl bg-neutral-200 px-12 py-6'
		}
	>
		<Icon name={category.icon} className={'size-12 text-neutral-700'} />
		<Text className={'text-center'}>{category.name}</Text>
	</div>
);
