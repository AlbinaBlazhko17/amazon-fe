import { Slot as SlotRdx } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { Icon } from '@/components/common';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'flex items-center justify-center whitespace-nowrap text-base focus:outline-none focus-visible:ring-[3px] focus-visible:ring-green-500 disabled:pointer-events-none transition-colors',
	{
		variants: {
			variant: {
				primary: 'bg-neutral-700 text-neutral-50 hover:bg-neutral-900',
				secondary:
					'bg-transparent text-neutral-700 hover:bg-neutral-700 hover:text-neutral-50 border border-neutral-700',
				'secondary-white':
					'bg-transparent text-neutral-50 hover:bg-neutral-50 hover:text-neutral-700 border border-neutral-50',
				plain: ''
			},
			size: {
				full: 'h-full w-full',
				fit: 'h-fit w-fit',
				auto: 'h-auto w-auto',
				md: 'px-14 py-4'
			},
			justify: {
				start: 'justify-start',
				center: 'justify-center',
				'space-between': 'justify-between',
				'space-around': 'justify-around',
				'space-evenly': 'justify-evenly',
				end: 'justify-end'
			},
			borderRadius: {
				sm: 'rounded-sm',
				md: 'rounded-md',
				lg: 'rounded-lg',
				full: 'rounded-full'
			}
		},
		defaultVariants: {
			variant: 'primary',
			size: 'md',
			justify: 'center',
			borderRadius: 'md'
		}
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	isLoading?: boolean;
	loadingClassName?: string;
	leftSection?: React.ComponentType<React.SVGProps<SVGSVGElement>> | React.ReactNode;
	rightSection?: React.ComponentType<React.SVGProps<SVGSVGElement>> | React.ReactNode;
	justify?: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'end';
	leftSectionClassName?: string;
	rightSectionClassName?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			borderRadius,
			asChild = false,
			type = 'button',
			loadingClassName,
			leftSection: LeftSection,
			rightSection: RightSection,
			justify,
			leftSectionClassName,
			rightSectionClassName,
			isLoading,
			disabled,
			...props
		},
		ref
	) => {
		const Comp = asChild ? SlotRdx : 'button';
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, justify, borderRadius, className }))}
				type={type}
				ref={ref}
				disabled={disabled || isLoading}
				{...props}
			>
				{isLoading ? (
					<Icon name='Loader' className={cn('size-6 animate-spin', loadingClassName)} />
				) : (
					<>
						{React.isValidElement(LeftSection) && (
							<div className={leftSectionClassName}>{LeftSection}</div>
						)}
						<span>{props.children}</span>
						{React.isValidElement(RightSection) && (
							<div className={rightSectionClassName}>{RightSection}</div>
						)}
					</>
				)}
			</Comp>
		);
	}
);
Button.displayName = 'Button';

export { Button, buttonVariants };
