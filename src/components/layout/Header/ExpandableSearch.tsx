'use client';

import { motion } from 'framer-motion';
import { type SetStateAction, useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui';

import { cn } from '@/lib/utils';

import { Icon, SearchInput } from '../../common';

interface ExpandableSearchProps {
	isOpen: boolean;
	setIsOpen: React.Dispatch<SetStateAction<boolean>>;
	className?: string;
}

export const ExpandableSearch = ({ isOpen, setIsOpen, className }: ExpandableSearchProps) => {
	const [searchValue, setSearchValue] = useState('');
	const searchRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleOpen = () => {
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	const toggleSearch = () => {
		setIsOpen(prev => !prev);
	};

	useEffect(() => {
		if (isOpen && inputRef.current) {
			setTimeout(() => {
				inputRef.current?.focus();
			}, 50);
		}
	}, [isOpen]);

	useEffect(() => {
		if (!isOpen) return;

		const checkIfClickedOutside = (event: MouseEvent) => {
			const target = event.target as Node;
			const isClickInsideSearchInput =
				target instanceof HTMLInputElement && target.placeholder === 'Search';

			if (
				searchRef.current &&
				buttonRef.current &&
				!searchRef.current.contains(target) &&
				!buttonRef.current.contains(target) &&
				!isClickInsideSearchInput
			) {
				handleClose();
			}
		};

		document.addEventListener('mousedown', checkIfClickedOutside);
		return () => {
			document.removeEventListener('mousedown', checkIfClickedOutside);
		};
	}, [isOpen]);

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
				className={cn(
					'absolute sm:max-w-[400px] lg:mr-9 lg:max-w-[300px]',
					isOpen ? 'block' : 'hidden'
				)}
				ref={searchRef}
			>
				<SearchInput
					placeholder={'Search'}
					className={'w-full'}
					onFocus={handleOpen}
					onChange={e => setSearchValue(e.target.value)}
					value={searchValue}
					ref={inputRef}
				/>
				<Icon
					name={'X'}
					className={
						'absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-neutral-400 hover:text-neutral-700'
					}
					onClick={() => setSearchValue('')}
				/>
			</motion.div>

			<div className={'pl-9'} onTouchEnd={handleOpen} onClick={toggleSearch} ref={buttonRef}>
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
