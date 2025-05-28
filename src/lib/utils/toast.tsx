import { type ToasterProps, toast as sonnerToast } from 'sonner';

import { Icon } from '@/components/common';

export const toast = (
	type: 'success' | 'error' | 'warning' | 'info',
	message: string,
	description: string,
	options?: ToasterProps
) => {
	sonnerToast[type](message, {
		description,
		cancel: {
			label: <Icon name={'X'} className={'size-6 text-gray-500'} />,
			onClick: () => sonnerToast.dismiss()
		},
		...options
	});
};
