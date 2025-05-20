'use client';

import { cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const blackPropsList = ['withCountryCallingCode'];

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	isWarning?: boolean;
	leftSection?: React.ReactNode;
	rightSection?: React.ReactNode;
	error?: boolean;
}

const inputVariants = cva(
	'relative flex h-12 w-full rounded-lg border bg-neutral-100 font-medium text-neutral-700 ring-offset-white transition-colors duration-200 ease-in-out file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-700 focus-within:border-neutral-400 hover:focus-within:border-neutral-400',
	{
		variants: {
			status: {
				error: 'border-red-500',
				warning: 'border-yellow-500',
				default: 'border-transparent focus-within:outline-none ',
				disabled: 'border-neutral-500 bg-neutral-100 text-neutral-500'
			}
		},
		defaultVariants: {
			status: 'default'
		}
	}
);

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ leftSection, rightSection, className, type, ...props }, ref) => {
		const { isWarning, onChange, disabled, error, ...rest } = props;

		const getStatus = () => {
			if (error) return 'error';
			if (isWarning) return 'warning';
			if (disabled) return 'disabled';
			return 'default';
		};

		const filterInputProps = (props: InputProps) => {
			const filteredProps: { [key: string]: string | number | boolean } = {};
			Object.keys(props).forEach((key: string) => {
				if (!blackPropsList.includes(key)) {
					filteredProps[key] = (props as InputProps)[key as keyof InputProps];
				}
			});
			return filteredProps;
		};

		return (
			<div
				className={cn(
					inputVariants({
						status: getStatus()
					}),
					className
				)}
			>
				{React.isValidElement(leftSection) && (
					<div className='absolute inset-y-0 left-0 flex items-center pl-4'>{leftSection}</div>
				)}
				<input
					className='w-full rounded-xl px-4 py-[10px] transition-colors duration-200 ease-in-out placeholder:text-sm placeholder:text-neutral-300 focus:placeholder-transparent focus:outline-none'
					type={type}
					ref={ref}
					disabled={disabled}
					onChange={onChange}
					{...filterInputProps(rest)}
				/>
				{React.isValidElement(rightSection) && (
					<div className='absolute inset-y-0 right-0 flex items-center pr-4'>{rightSection}</div>
				)}
			</div>
		);
	}
);
Input.displayName = 'Input';

export { Input };
