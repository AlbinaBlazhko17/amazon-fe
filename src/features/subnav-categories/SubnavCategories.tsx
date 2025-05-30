'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Icon, Text } from '@/components/common';

import { useSubnavCategories } from './use-subnav-categories';

export const SubnavCategories = () => {
	const { categories } = useSubnavCategories();

	return (
		<motion.div
			initial={'closed'}
			animate={categories.length > 0 ? 'open' : 'closed'}
			variants={{
				open: { opacity: 1, height: 'auto' },
				closed: { opacity: 0, height: 0 }
			}}
			transition={{ duration: 0.3 }}
			className={
				'hidden w-full items-center justify-center gap-4 bg-neutral-600 py-2 lg:flex lg:px-10 xl:px-20 2xl:px-40'
			}
		>
			<ul className={'first: flex items-center text-neutral-300 lg:gap-3 xl:gap-5 2xl:gap-12'}>
				{categories.map(({ id, name, icon, slug }, i) => (
					<motion.div
						key={id}
						initial={'closed'}
						animate={categories.length > 0 ? 'open' : 'closed'}
						variants={{
							open: { opacity: 1, y: 0 },
							closed: { opacity: 0, y: -10 }
						}}
						transition={{ duration: 0.3, delay: (i + 1) * 0.1 }}
						className={'flex items-center lg:gap-3 xl:gap-5 2xl:gap-12'}
					>
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
					</motion.div>
				))}
			</ul>
		</motion.div>
	);
};
