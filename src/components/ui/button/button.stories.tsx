import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './button';

const meta = {
	title: 'components/ui/button',
	component: Button,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			description: 'The variant of the button',
			options: ['primary', 'secondary', 'secondary-white', 'plain'],
			table: {
				defaultValue: { summary: 'plain' }
			}
		},
		size: {
			control: 'radio',
			description: 'The size of the button',
			options: ['full', 'auto', 'fit', 'md'],
			table: {
				defaultValue: { summary: 'md' }
			}
		},
		disabled: {
			control: 'boolean',
			description: 'The disabled state of the button'
		},
		justify: {
			control: 'radio',
			description: 'The justify content of the button',
			options: ['start', 'center', 'space-between', 'space-around', 'space-evenly', 'end']
		},
		asChild: {
			control: 'boolean',
			description: 'Render as a child of Slot'
		}
	},
	args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: 'Default button'
	}
};

export const Primary: Story = {
	args: {
		variant: 'primary',
		children: 'Primary button'
	}
};

export const Secondary: Story = {
	args: {
		variant: 'secondary',
		children: 'Secondary button',
		isLoading: true
	}
};

export const SecondaryWhite: Story = {
	args: {
		variant: 'secondary-white',
		children: 'SecondaryWhite button'
	}
};
