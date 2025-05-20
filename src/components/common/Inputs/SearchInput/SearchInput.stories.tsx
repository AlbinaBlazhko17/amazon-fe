import type { Meta, StoryObj } from '@storybook/react';

import { SearchInput } from './SearchInput';

const meta = {
	title: 'components/common/Inputs/SearchInput',
	component: SearchInput,
	argTypes: {
		placeholder: {
			control: 'text'
		}
	},
	tags: ['autodocs']
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: 'Search...'
	}
};
