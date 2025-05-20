import type { IIconLink, INavLink } from '../types';

export const navLinks: INavLink[] = [
	{
		name: 'Home',
		href: '/'
	},
	{
		name: 'About',
		href: '/about'
	},
	{
		name: 'Contact Us',
		href: '/contact'
	}
];

export const iconLinks: IIconLink[] = [
	{
		name: 'Favorites',
		href: '/favorites',
		icon: 'Favorites'
	},
	{
		name: 'Cart',
		href: '/cart',
		icon: 'Cart'
	},
	{
		name: 'User',
		href: '/user',
		icon: 'User'
	}
];
