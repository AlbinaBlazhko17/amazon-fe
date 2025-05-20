import type { Meta, StoryObj } from '@storybook/react';

import { NavLink } from './NavLink';

const meta = {
	title: 'components/common/NavLink',
	component: NavLink,
	tags: ['autodocs'],
	argTypes: {
		children: { control: 'text' },
		href: { control: 'text' },
		isActive: { control: 'boolean' },
		activeClass: { control: 'text' },
		variant: {
			control: 'radio',
			description: 'The variant of the link button',
			options: ['filled', 'outline', 'loading', 'link', 'plain', 'anchor', 'black', 'ghost']
		},
		size: {
			control: 'radio',
			description: 'The size of the link button',
			options: ['full', 'auto', 'fit', 'lg', 'md', 'rounded-xl', 'rounded-md']
		},
		borderRadius: {
			control: 'radio',
			description: 'The border radius of the link button',
			options: ['none', 'sm', 'md', 'lg', 'full']
		}
	}
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		href: '/',
		children: 'Home'
	}
};
