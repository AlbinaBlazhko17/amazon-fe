'use client';

import Link from 'next/link';

import { Icon, Text } from '@/components/common';

import { useSubnavCategories } from './use-subnav-categories';

export const SubnavCategories = () => {
	const { categories } = useSubnavCategories();

	return (
		<div
			className={
				'hidden w-full items-center justify-center gap-4 bg-neutral-600 py-2 lg:flex lg:px-10 xl:px-20 2xl:px-40'
			}
		>
			<ul className={'first: flex items-center text-neutral-300 lg:gap-3 xl:gap-5 2xl:gap-12'}>
				{categories.length > 0 &&
					categories.map(({ id, name, icon, slug }, i) => (
						<div key={id} className={'flex items-center lg:gap-3 xl:gap-5 2xl:gap-12'}>
							<li>
								<Link
									href={`/categories/${slug}`}
									className={'flex items-center gap-1 hover:text-neutral-200'}
								>
									<Icon name={icon} className={'size-6 text-neutral-200'} />
									<Text as={'span'} className={'ml-2 text-sm'}>
										{name}
									</Text>
								</Link>
							</li>
							<div
								className={`${i === categories.length - 1 ? 'hidden' : 'block'} h-5 w-[2px] rounded-full bg-neutral-400`}
							></div>
						</div>
					))}
			</ul>
		</div>
	);
};
