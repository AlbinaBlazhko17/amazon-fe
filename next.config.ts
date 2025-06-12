import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	turbopack: {
		rules: {
			'*.svg': {
				loaders: ['@svgr/webpack'],
				as: '*.js'
			}
		}
	},

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'loremflickr.com'
			},
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '3001'
			}
		]
	},

	eslint: {
		ignoreDuringBuilds: true
	}
};

export default nextConfig;
