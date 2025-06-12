import type { Metadata } from 'next';

import { Footer, Header } from '@/components/layout';
import { Toaster } from '@/components/ui';

import { inter, poppinsSans } from '@/lib/constants';
import { ReactQueryProvider } from '@/lib/modules/query-client';

import { SubnavCategories } from '@/features/subnav-categories';

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
				<ReactQueryProvider>
					<Header />
					<SubnavCategories />
					<main className={'flex flex-1 flex-col'}>{children}</main>
					<Footer />
					<Toaster />
				</ReactQueryProvider>
			</body>
		</html>
	);
}
