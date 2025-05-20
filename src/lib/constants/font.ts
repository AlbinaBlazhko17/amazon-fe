import { Inter, Poppins } from 'next/font/google';

const poppinsSans = Poppins({
	variable: '--font-poppins',
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export { poppinsSans, inter };
