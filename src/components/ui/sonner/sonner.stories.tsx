import type { Meta, StoryObj } from '@storybook/react';

import { toast } from '@/lib/utils';

import { Button } from '../button';

import { Toaster } from './sonner';

const meta = {
	title: 'components/ui/sonner',
	component: Toaster,
	tags: ['autodocs']
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className='space-y-4'>
			<p className='text-muted-foreground text-sm'>
				Click the buttons below to see different toast types:
			</p>
			<div className='flex flex-wrap gap-2'>
				<Button onClick={() => toast('success', 'Success!', 'Operation completed successfully')}>
					Success Toast
				</Button>
				<Button onClick={() => toast('error', 'Error!', 'Something went wrong')}>
					Error Toast
				</Button>
				<Button onClick={() => toast('warning', 'Warning!', 'Please be careful')}>
					Warning Toast
				</Button>
				<Button
					onClick={() => toast('info', 'Info', 'Here is some information')}
					variant='secondary'
				>
					Info Toast
				</Button>
			</div>
		</div>
	)
};

export const Success: Story = {
	render: () => {
		const handleClick = () => {
			toast('success', 'Success Title', 'This is a success toast message');
		};

		return <Button onClick={handleClick}>Show Success Toast</Button>;
	}
};

export const Error = () => {
	const handleClick = () => {
		toast('error', 'Error Title', 'This is an error toast message');
	};

	return <Button onClick={handleClick}>Click me to show an error toast</Button>;
};

export const Warning = () => {
	const handleClick = () => {
		toast('warning', 'Warning Title', 'This is a warning toast message');
	};

	return <Button onClick={handleClick}>Click me to show a warning toast</Button>;
};

export const Info = () => {
	const handleClick = () => {
		toast('info', 'Info Title', 'This is an info toast message');
	};

	return <Button onClick={handleClick}>Click me to show an info toast</Button>;
};
