import Image from 'next/image';
import Link from 'next/link';

import type { ProductResponse } from '@/modules/products';

interface SearchItemResultsProps {
	data: ProductResponse;
	onSearchResultClick?: () => void;
}

export const SearchItemResults = ({ data, onSearchResultClick }: SearchItemResultsProps) => (
	<Link
		href={`/products/${data.slug}`}
		className={
			'flex w-full items-center justify-between rounded-lg p-1 transition-all hover:bg-neutral-100'
		}
		onClick={onSearchResultClick}
	>
		<div className='flex items-center gap-2'>
			<Image
				src={data.imagesUrl[0]}
				alt={data.name}
				width={48}
				height={48}
				className='h-12 w-12 rounded-lg object-cover object-center'
			/>
			<div className={'mr-1'}>
				<h3 className='line-clamp-1 text-sm font-semibold'>{data.name}</h3>
				<p className='line-clamp-2 text-xs text-neutral-500'>{data.description}</p>
			</div>
			<span className='text-sm font-semibold text-neutral-700'>${data.price}</span>
		</div>
	</Link>
);
