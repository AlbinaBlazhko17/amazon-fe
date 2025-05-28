'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner, ToasterProps } from 'sonner';

import { Icon } from '@/components/common';

const Toaster = ({ ...props }: ToasterProps) => {
	const { theme = 'system' } = useTheme();

	return (
		<Sonner
			theme={theme as ToasterProps['theme']}
			className='toaster group'
			toastOptions={{
				classNames: {
					toast:
						'group toast group-[.toaster]:!bg-neutral-100 group-[.toaster]:!gap-4 group-[.toaster]:!text-neutral-700 group-[.toaster]:!border group-[.toaster]:!border-neutral-400 group-[.toaster]:border-border group-[.toaster]:!font-bold group-[.toaster]:shadow-lg',
					description: 'group-[.toast]:!text-neutral-500',
					actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
					cancelButton: 'group-[.toast]:bg-transparent group-[.toast]:text-gray-500'
				}
			}}
			icons={{
				success: <Icon name={'CheckCircle'} className='size-6 text-green-500' />,
				info: <Icon name={'Info'} className='size-6 text-blue-500' />,
				warning: <Icon name={'AlertTriangle'} className='size-6 text-amber-500' />,
				error: <Icon name={'XCircle'} className='size-6 text-red-500' />,
				loading: <Icon name={'Loader'} className='size-6 animate-spin text-gray-500' />
			}}
			{...props}
		/>
	);
};

export { Toaster };
