import { AppConfig } from './app-config.module';
import { envSchema } from './libs/schemas';

const APP_CONFIG = new AppConfig(envSchema);

export { APP_CONFIG };
