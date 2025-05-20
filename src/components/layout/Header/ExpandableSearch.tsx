'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import { Button } from '@/components/ui';

import { cn } from '@/lib/utils';

import { Icon, SearchInput } from '../../common';

interface ExpandableSearchProps {
	className?: string;
}

export const ExpandableSearch = ({ className }: ExpandableSearchProps) => {
	const [searchValue, setSearchValue] = useState('');
	const [isOpen, setIsOpen] = useState(false);

	const handleMouseLeave = () => {
		if (!searchValue) {
			setIsOpen(false);
		}
	};

	const handleOpen = () => {
		setIsOpen(true);
	};

	return (
		<div className={cn('relative hidden w-full items-center justify-end sm:flex', className)}>
			<motion.div
				initial={'closed'}
				animate={isOpen ? 'open' : 'closed'}
				variants={{
					open: { opacity: 1, width: '300px' },
					closed: { opacity: 0, width: '0px' }
				}}
				transition={{ duration: 0.3 }}
				className={cn('absolute mr-9', isOpen ? 'block' : 'hidden')}
			>
				<SearchInput
					placeholder={'Search'}
					className={'w-full'}
					onFocus={handleOpen}
					onMouseEnter={handleOpen}
					onMouseLeave={handleMouseLeave}
					onChange={e => setSearchValue(e.target.value)}
					value={searchValue}
				/>
			</motion.div>

			<div
				className={'pl-9'}
				onMouseEnter={handleOpen}
				onMouseLeave={handleMouseLeave}
				onClick={() => setIsOpen(prev => !prev)}
			>
				<Button
					variant={'plain'}
					size={'fit'}
					borderRadius={'full'}
					className={`${isOpen ? 'bg-neutral-100' : ''} p-1 hover:bg-neutral-100`}
					aria-label={'Search'}
				>
					<Icon name={'Search'} />
				</Button>
			</div>
		</div>
	);
};
