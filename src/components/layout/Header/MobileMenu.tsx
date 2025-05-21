'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { NavLink } from '@/components/common';

import { navLinks } from '@/lib/constants';
import { useCheckOutsideClick } from '@/lib/hooks';

export const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();
	const menuRef = useRef<HTMLDivElement>(null);

	useCheckOutsideClick(menuRef, () => {
		setIsOpen(false);
	});

	const isActive = (href: string) => {
		return pathname === href;
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

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
							open: { rotate: -45, translateY: 7 },
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

			<motion.div
				initial={'closed'}
				animate={isOpen ? 'open' : 'closed'}
				variants={{
					open: { opacity: 1, x: 0 },
					closed: { opacity: 0, x: '100%' }
				}}
				transition={{ duration: 0.3 }}
				className={
					'fixed top-0 right-0 z-10 flex h-dvh w-[40vw] items-center justify-center bg-white shadow-lg'
				}
			>
				<nav>
					<ul className={'flex h-full w-full flex-col items-center justify-center gap-6'}>
						{navLinks.map(({ name, href }, i) => (
							<motion.li
								key={name}
								initial={'closed'}
								animate={isOpen ? 'open' : 'closed'}
								variants={{
									open: { opacity: 1, x: 0 },
									closed: { opacity: 0, x: '100%' }
								}}
								transition={{ duration: 0.8, delay: i * 0.2 }}
							>
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
							</motion.li>
						))}
					</ul>
				</nav>
			</motion.div>
		</div>
	);
};
