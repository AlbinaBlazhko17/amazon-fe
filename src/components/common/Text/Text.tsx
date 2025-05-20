import { cva } from 'class-variance-authority';
import React from 'react';

import { cn } from '@/lib/utils';

export const defaultVariantMapping = {
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4',
	h5: 'h5',
	h6: 'h6',
	'p-26': 'p-26',
	p: 'p',
	inherit: 'p'
};

const textVariants = cva('', {
	variants: {
		variant: {
			h1: 'text-[5rem] -tracking-wider',
			h2: 'text-7xl leading-[110%]',
			h3: 'text-[3.375rem] leading-[120%]',
			h4: 'text-[2.5rem] leading-[120%]',
			h5: 'text-[2.125rem] leading-[140%]',
			h6: 'text-[1.75rem] leading-[140%]',
			'p-26': 'text-[1.625rem] leading-[140%]',
			p: 'text-base leading-[140%]',
			inherit: ''
		},
		align: {
			inherit: '',
			left: 'text-left',
			center: 'text-center',
			right: 'text-right',
			justify: 'text-justify'
		},
		weight: {
			normal: 'font-normal',
			medium: 'font-medium',
			semibold: 'font-semibold',
			bold: 'font-bold'
		}
	},
	defaultVariants: {
		variant: 'p',
		align: 'inherit',
		weight: 'medium'
	}
});

type TextProps<C extends React.ElementType> = {
	as?: C;
	align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
	weight?: 'normal' | 'bold' | 'semibold' | 'medium';
	className?: string;
	gutterBottom?: boolean;
	noWrap?: boolean;
	paragraph?: boolean;
	variant?: keyof typeof defaultVariantMapping;
	variantMapping?: typeof defaultVariantMapping;
	children: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>;

const Text = <C extends React.ElementType>({
	as,
	align = 'inherit',
	weight,
	className,
	paragraph = false,
	variant = 'p',
	variantMapping = defaultVariantMapping,
	children,
	...restProps
}: TextProps<C>) => {
	const Component =
		as || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';

	return (
		<Component className={cn(textVariants({ align, variant, weight }), className)} {...restProps}>
			{' '}
			{children}{' '}
		</Component>
	);
};

Text.displayName = 'Text';

export { Text };
