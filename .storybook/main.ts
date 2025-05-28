import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@chromatic-com/storybook',
		'@storybook/experimental-addon-test'
	],
	framework: {
		name: '@storybook/nextjs',
		options: {}
	},
	staticDirs: ['../public'],
	webpackFinal: async config => {
		const fileLoaderRule = config.module?.rules?.find(rule =>
			(rule as { test?: RegExp })?.test?.test('.svg')
		) as {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			[key: string]: any;
		};

		config.module?.rules?.push(
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/
			},

			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: {
					not: [...(fileLoaderRule?.resourceQuery?.not || []), /url/]
				},
				use: ['@svgr/webpack']
			}
		);

		fileLoaderRule.exclude = /\.svg$/i;

		return config;
	}
};
export default config;
