import type { z } from 'zod';

import type { envSchema } from '../schemas';

type EnvironmentSchema = z.infer<typeof envSchema>;

export { type EnvironmentSchema };
