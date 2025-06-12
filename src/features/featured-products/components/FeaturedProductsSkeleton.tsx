'use client';

import { Skeleton } from '@/components/ui';

export const FeaturedProductsSkeleton = () => (
	<>
		<Skeleton className={'delay-75 lg:col-span-4'} />
		<Skeleton className={'row-start-4 delay-100 lg:col-span-2 lg:row-start-2'} />
		<Skeleton
			className={'row-start-5 delay-150 lg:col-span-2 lg:col-start-3 lg:row-span-2 lg:row-start-2'}
		/>
		<Skeleton className={'delay-200'} />
		<Skeleton className={'delay-300'} />
	</>
);
