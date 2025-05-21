import React from 'react';

import { Icon } from '@/components/common/Icon';
import { Input, InputProps } from '@/components/ui/input';

import { cn } from '@/lib/utils';

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, ...props }, ref) => {
		return (
			<Input
				type={'text'}
				leftSection={<Icon name='Search' className='size-6 text-neutral-400' />}
				className={cn('h-10 w-full pl-9', className)}
				ref={ref}
				{...props}
			/>
		);
	}
);

SearchInput.displayName = 'SearchInput';

export { SearchInput };
