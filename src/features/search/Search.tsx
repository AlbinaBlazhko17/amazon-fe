'use client';

import { motion } from 'framer-motion';
import { type SetStateAction } from 'react';

import { Button } from '@/components/ui';

import { cn } from '@/lib/utils';

import { Icon, SearchInput } from '../../components/common';

import { SearchResults } from './SearchResults';
import { useSearch } from './use-search';

interface SearchProps {
	isOpen: boolean;
	setIsOpen: React.Dispatch<SetStateAction<boolean>>;
	className?: string;
}

export const Search = ({ isOpen, setIsOpen, className }: SearchProps) => {
	const {
		buttonRef,
		inputRef,
		searchRef,
		searchResultsRef,
		toggleSearch,
		handleOpen,
		searchValue,
		setSearchValue,
		products,
		isLoading,
		handleInputChange,
		isDropdownOpen,
		handleSearchResultClick
	} = useSearch({ isOpen, setIsOpen });

	return (
		<div className={cn('relative flex w-full items-center justify-end', className)}>
			<motion.div
				initial={'closed'}
				animate={isOpen ? 'open' : 'closed'}
				variants={{
					open: { opacity: 1, width: '100%' },
					closed: { opacity: 0, width: '0px' }
				}}
				transition={{ duration: 0.3 }}
				className={'absolute sm:right-9 sm:max-w-[400px] lg:max-w-[300px]'}
				ref={searchRef}
			>
				<div className={`${isOpen ? 'block' : 'hidden'} relative w-full`}>
					<SearchInput
						placeholder={'Search'}
						className={'w-full'}
						onFocus={handleOpen}
						onChange={handleInputChange}
						defaultValue={searchValue}
						ref={inputRef}
					/>
					<Icon
						name={'X'}
						className={cn(
							'absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-neutral-400 hover:text-neutral-700',
							!searchValue ? 'hidden' : 'block'
						)}
						onClick={() => setSearchValue('')}
					/>

					<SearchResults
						onSearchResultClick={handleSearchResultClick}
						isOpen={isDropdownOpen}
						data={products}
						isLoading={isLoading}
						ref={searchResultsRef}
					/>
				</div>
			</motion.div>

			<div className={'search-button'} onClick={toggleSearch} ref={buttonRef}>
				<Button
					variant={'plain'}
					size={'fit'}
					borderRadius={'full'}
					className={`${isOpen ? 'bg-neutral-100' : ''} cursor-pointer p-1 text-neutral-700 hover:bg-neutral-100`}
					aria-label={'Search'}
				>
					<Icon name={'Search'} />
				</Button>
			</div>
		</div>
	);
};
