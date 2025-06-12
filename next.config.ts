import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	webpack(config) {
		const fileLoaderRule = config.module.rules.find(
			(rule: { test?: { test?: (fileName: string) => boolean } }) => rule.test?.test?.('.svg')
		);

		config.module.rules.push(
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/ // *.svg?url
			},
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
				use: ['@svgr/webpack']
			}
		);
		fileLoaderRule.exclude = /\.svg$/i;

		return config;
	},
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
