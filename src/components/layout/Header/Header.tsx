'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { iconLinks, navLinks } from '@/lib/constants';

import { Icon, NavLink } from '../../common';

import { MobileMenu } from './MobileMenu';
import { Search } from '@/features';

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	const isActive = (href: string) => {
		return pathname === href;
	};

	return (
		<header
			className={
				'flex justify-between border-b border-b-neutral-900 bg-neutral-50 px-2 py-4 sm:px-8 lg:grid lg:grid-cols-3 lg:border-none lg:px-28 xl:px-40 2xl:px-48'
			}
		>
			<Link
				href={'/'}
				className={`flex items-center gap-2 sm:block ${isOpen ? 'hidden' : 'block'}`}
			>
				<Icon name={'Logo'} />
			</Link>

			<nav className={'hidden w-full items-center justify-center lg:flex'}>
				<ul className={'flex items-center gap-[52px]'}>
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
				</ul>
			</nav>

			<div className={'hidden items-center justify-end gap-6 lg:flex'}>
				<Search isOpen={isOpen} setIsOpen={setIsOpen} />
				<ul className='flex items-center gap-6'>
					{iconLinks.map(({ name, href, icon }) => (
						<li key={name}>
							<NavLink
								href={href}
								variant={'plain'}
								size={'fit'}
								borderRadius={'full'}
								className={'p-1 hover:bg-neutral-100'}
								activeClassName={'bg-neutral-100'}
								isActive={isActive(href)}
							>
								<Icon name={icon} />
							</NavLink>
						</li>
					))}
				</ul>
			</div>
			<div className={'flex w-full gap-4 lg:hidden'}>
				<Search isOpen={isOpen} setIsOpen={setIsOpen} />
				<MobileMenu />
			</div>
		</header>
	);
};
