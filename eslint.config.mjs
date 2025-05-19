import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname
});

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	eslintPluginPrettierRecommended,
	{
		extends: ['eslint:recommended', 'plugin:prettier/recommended'],
		rules: {
			'no-console': [
				'warn',
				{
					allow: ['warn', 'error']
				}
			],
			'no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					ignoreRestSiblings: true
				}
			],
			'react/no-unescaped-entities': 'off',
			'react/react-in-jsx-scope': 'off',
			'import/no-anonymous-default-export': [
				'error',
				{
					allowArray: true,
					allowArrowFunction: true,
					allowAnonymousClass: true,
					allowAnonymousFunction: true,
					allowCallExpression: true,
					allowLiteral: true,
					allowObject: true
				}
			],
			'react/prop-types': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/jsx-uses-react': 'off',
			'react/jsx-props-no-spreading': 'off',
			'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
			'react/display-name': 'off',

			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn'
		}
	}
];

export default eslintConfig;
