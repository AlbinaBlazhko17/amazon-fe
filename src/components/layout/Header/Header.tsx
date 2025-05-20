'use client';

import { usePathname } from 'next/navigation';

import { iconLinks, navLinks } from '@/lib/constants';

import { Icon, NavLink } from '../../common';

import { ExpandableSearch } from './ExpandableSearch';

export const Header = () => {
	const pathname = usePathname();

	const isActive = (href: string) => {
		return pathname === href;
	};

	return (
		<header
			className={'grid grid-cols-3 bg-neutral-50 px-4 py-4 sm:px-16 lg:px-28 xl:px-40 2xl:px-48'}
		>
			<div className='flex items-center gap-2'>
				<Icon name={'Logo'} />
			</div>

			<nav className={'flex w-full items-center justify-center'}>
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

			<div className={'flex items-center justify-end gap-6'}>
				<ExpandableSearch />
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
		</header>
	);
};
