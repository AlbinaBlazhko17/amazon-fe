import type { Metadata } from 'next';

import { Header } from '@/components/layout/Header';

import { inter, poppinsSans } from '@/lib/constants';

import '@/styles/globals.css';

export const metadata: Metadata = {
	title: {
		template: '%s | Cyber',
		default: 'Cyber',
		absolute: 'Cyber | E-Commerce'
	},
	description: 'A E-Commerce website built with Next.js and Tailwind CSS',
	icons: [
		{
			rel: 'apple-touch-icon',
			url: '/apple-touch-icon.png'
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			url: '/favicon-32x32.png'
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '16x16',
			url: '/favicon-16x16.png'
		},
		{
			rel: 'icon',
			url: '/favicon.ico'
		}
	]
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${poppinsSans.variable} ${inter.variable} flex flex-col antialiased`}>
				<Header />
				<main className={'flex flex-1'}>{children}</main>
			</body>
		</html>
	);
}
