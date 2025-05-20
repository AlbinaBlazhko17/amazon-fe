import type { Preview } from '@storybook/react';
import React from 'react';

import { inter, poppinsSans } from '../src/lib/constants';
import '../src/styles/globals.css';

const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	},
	decorators: [
		Story => (
			<div className={`${poppinsSans.variable} ${inter.variable} antialiased`}>
				<Story />
			</div>
		)
	]
} satisfies Preview;

export default preview;
