import React from 'react';

import { Icon } from '@/components/common/Icon';
import { Input, InputProps } from '@/components/ui/input';

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
	return (
		<Input
			type='search'
			leftSection={<Icon name='Search' className='size-6 text-neutral-400' />}
			className='h-14 w-full pl-9'
			ref={ref}
			{...props}
		/>
	);
});

SearchInput.displayName = 'SearchInput';

export { SearchInput };
