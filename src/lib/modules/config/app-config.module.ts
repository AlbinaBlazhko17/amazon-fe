import type { ZodSchema } from 'zod';

import { AppEnvironment } from '@/lib/enums/index.js';
import type { ValueOf } from '@/lib/types/index.js';

import { type EnvironmentSchema } from './libs/types/index.js';

class AppConfig {
	public ENV: EnvironmentSchema;

	public constructor(envSchema: ZodSchema<EnvironmentSchema>) {
		this.ENV = envSchema.parse(this.envSchema);
	}

	private get envSchema(): EnvironmentSchema {
		return {
			APP: {
				ENVIRONMENT: process.env['NODE_ENV'] as ValueOf<typeof AppEnvironment>,
				BASE_URL: process.env['NEXT_PUBLIC_BASE_URL'] as string
			},
			API: {
				ORIGIN_URL: process.env['NEXT_PUBLIC_API_ORIGIN_URL'] as string,
				BASE_PATH: (process.env['NEXT_PUBLIC_API_BASE_PATH'] as string) || ''
			}
		};
	}
}

export { AppConfig };
