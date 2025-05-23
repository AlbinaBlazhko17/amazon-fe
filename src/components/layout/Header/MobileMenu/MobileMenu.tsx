'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Icon, NavLink, Text } from '@/components/common';

import { navLinks } from '@/lib/constants';

import { useMobileMenu } from './use-mobile-menu';

export const MobileMenu = () => {
	const { menuRef, isOpen, setIsOpen, isActive, categories, isCategoriesOpen, toggleCategories } =
		useMobileMenu();

	return (
		<div className={'flex items-center justify-between lg:hidden'} ref={menuRef}>
			<div className={'relative h-[18px] w-6'}>
				<div
					className={
						'absolute top-0 right-0 z-20 flex flex-col items-center gap-1.5 text-neutral-700'
					}
					onClick={() => setIsOpen(prev => !prev)}
				>
					<motion.span
						initial={'closed'}
						animate={isOpen ? 'open' : 'closed'}
						variants={{
							open: { rotate: -45, translateY: 8 },
							closed: { rotate: 0, translateY: 0 }
						}}
						transition={{ duration: 0.3 }}
						className={'h-[2px] w-6 bg-neutral-700'}
					></motion.span>

					<motion.span
						initial={'closed'}
						animate={isOpen ? 'open' : 'closed'}
						variants={{
							open: { rotate: 45, translateY: 0 },
							closed: { rotate: 0, translateY: 0 }
						}}
						transition={{ duration: 0.3 }}
						className={'h-[2px] w-6 bg-neutral-700'}
					></motion.span>

					<motion.span
						initial={'closed'}
						animate={isOpen ? 'open' : 'closed'}
						variants={{
							open: { rotate: 45, translateY: -8 },
							closed: { rotate: 0, translateY: 0 }
						}}
						transition={{ duration: 0.3 }}
						className={'h-[2px] w-6 bg-neutral-700'}
					></motion.span>
				</div>
			</div>

			<div
				className={`fixed top-0 left-0 z-10 h-screen w-screen bg-black/30 ${
					isOpen ? 'block' : 'hidden'
				}`}
				onClick={() => setIsOpen(false)}
			/>

			<motion.div
				initial={'closed'}
				animate={isOpen ? 'open' : 'closed'}
				variants={{
					open: { x: 0, opacity: 1 },
					closed: { x: '-100%', opacity: 0 }
				}}
				transition={{ duration: 0.3 }}
				className={
					'fixed top-0 left-0 z-10 h-dvh w-[65vw] bg-white shadow-lg sm:w-[60vw] md:w-[40vw]'
				}
			>
				<div
					className={
						'flex h-[65px] items-center justify-between border-b border-b-neutral-400 px-4'
					}
				>
					<Link href={'/'} className={`flex items-center gap-2`}>
						<Icon name={'Logo'} />
					</Link>
				</div>
				<nav className={'px-4 py-8'}>
					<ul className={'flex h-full w-full flex-col items-start justify-center gap-6'}>
						{navLinks.map(({ name, href }) => (
							<li key={name}>
								<NavLink
									href={href}
									variant={'plain'}
									size={'fit'}
									className={'p-0 font-medium text-neutral-400 hover:text-neutral-700'}
									activeClassName={'text-neutral-700 font-semibold'}
									isActive={isActive(href)}
								>
									{name}
								</NavLink>
							</li>
						))}

						<li className={'flex w-full flex-col items-start gap-3 sm:pl-4'}>
							<div className={'flex items-center gap-2'} onClick={toggleCategories}>
								<Text as={'span'} className={'text-neutral-400 hover:text-neutral-700'}>
									Categories
								</Text>
								<Icon
									name={'ChevronDown'}
									className={`${isCategoriesOpen ? 'rotate-180' : 'rotate-0'} size-6 text-neutral-400`}
								/>
							</div>

							<ul className={'flex w-full flex-col items-start gap-2 pl-3'}>
								{isCategoriesOpen &&
									categories.length > 0 &&
									categories.map(({ id, name, icon, slug }, i) => (
										<motion.li
											key={id}
											initial={'closed'}
											animate={isCategoriesOpen ? 'open' : 'closed'}
											variants={{
												open: { opacity: 1, x: 0 },
												closed: { opacity: 0, x: '100%' }
											}}
											transition={{ duration: 0.8, delay: (i + 1) * 0.3 }}
										>
											<NavLink
												href={`/categories/${slug}`}
												variant={'plain'}
												size={'fit'}
												className={'p-1 font-medium text-neutral-400 hover:text-neutral-700'}
											>
												<Icon name={icon} className={'size-6'} />
												<Text as={'span'} className={'ml-2 text-sm'}>
													{name}
												</Text>
											</NavLink>
										</motion.li>
									))}
							</ul>
						</li>
					</ul>
				</nav>
			</motion.div>
		</div>
	);
};
