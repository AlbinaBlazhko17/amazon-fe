import { motion } from 'framer-motion';
import { forwardRef } from 'react';

import { Icon, Text } from '@/components/common';

import type { Product } from '@/modules/products';

import { SearchItemResults } from './SearchItemResults';

interface SearchResultsProps {
	isOpen: boolean;
	data: Product[];
	isLoading: boolean;
	onSearchResultClick?: () => void;
}

export const SearchResults = forwardRef<HTMLDivElement, SearchResultsProps>(
	({ isOpen, data, isLoading, onSearchResultClick }, ref) => {
		return (
			<motion.div
				initial={'closed'}
				animate={isOpen ? 'open' : 'closed'}
				variants={{
					open: { opacity: 1, height: 'auto' },
					closed: { opacity: 0, height: 0 }
				}}
				transition={{ duration: 0.3 }}
				className='search-results absolute z-10 mt-2 max-h-[400px] w-full max-w-[250px] overflow-scroll rounded-lg bg-white p-2 shadow-lg sm:max-w-[600px] lg:max-w-[400px]'
				ref={ref}
			>
				{!isLoading && data.length === 0 && (
					<div className='flex w-full items-center justify-center p-1'>
						<Text className='text-sm font-semibold text-neutral-500'>
							No results found for your search.
						</Text>
					</div>
				)}
				{!isLoading ? (
					<>
						{data.map(product => (
							<SearchItemResults
								key={product.id}
								data={product}
								onSearchResultClick={onSearchResultClick}
							/>
						))}
					</>
				) : (
					<div className='flex w-full items-center justify-center'>
						<Icon name='Loader' className='animate-spin' />
					</div>
				)}
			</motion.div>
		);
	}
);
