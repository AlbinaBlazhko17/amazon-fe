import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input';

const meta = {
	title: 'components/ui/input',
	component: Input,
	tags: ['autodocs']
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: 'Type something...',
		autoFocus: false
	}
};

export const Error: Story = {
	args: {}
};

export const Warning: Story = {
	args: {
		isWarning: true
	}
};

export const Disabled: Story = {
	args: {
		placeholder: 'Disabled input',
		disabled: true
	}
};
