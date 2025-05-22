import { z } from 'zod';

import { AppEnvironment } from '@/lib/enums';

export const envSchema = z
	.object({
		APP: z.object({
			ENVIRONMENT: z.enum([
				AppEnvironment.DEVELOPMENT,
				AppEnvironment.PRODUCTION,
				AppEnvironment.TEST
			]),
			BASE_URL: z.string().url()
		}),
		API: z.object({
			ORIGIN_URL: z
				.string()
				.url()
				.regex(/^https?:\/\/.*$/, 'URL must start with http:// or https://'),
			BASE_PATH: z.string()
		})
	})
	.required();
