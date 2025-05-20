import type { Meta, StoryObj } from '@storybook/react';

import { Text, defaultVariantMapping } from './Text';

const meta = {
	title: 'components/common/Text',
	component: Text,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'radio',
			options: Object.keys(defaultVariantMapping),
			table: {
				defaultValue: { summary: 'p-m' }
			}
		},
		align: {
			control: 'radio',
			options: ['inherit', 'left', 'center', 'right', 'justify'],
			table: {
				defaultValue: { summary: 'inherit' }
			}
		},
		weight: {
			control: 'radio',
			options: ['normal', 'bold', 'semibold', 'medium'],
			table: {
				defaultValue: { summary: 'medium' }
			}
		}
	}
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: 'Any text that will be written'
	}
};

export const Demo = {
	render: () => (
		<div className='flex flex-col gap-4'>
			<Text variant='h1'>Heading 1</Text>
			<Text variant='h2'>Heading 2</Text>
			<Text variant='h3'>Heading 3</Text>
			<Text variant='h4'>Heading 4</Text>
			<Text variant='h5'>Heading 5</Text>
			<Text variant='h6'>Heading 6</Text>
			<Text>Paragraph text</Text>
		</div>
	)
};
