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

export const servicesLinks = [
	'Bonus program',
	'Gift cards',
	'Credit and payment',
	'Service contracts',
	'Non-cash account',
	'Payment'
];

export const assistanceLinks = [
	'Find an order',
	'Terms of delivery',
	'Exchange and return of goods',
	'Guarantee',
	'Frequently asked questions',
	'Terms of use of the site'
];
