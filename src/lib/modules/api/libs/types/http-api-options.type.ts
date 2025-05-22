import type { ContentType, MethodBodyOptions } from '@/lib/modules/http';
import type { ValueOf } from '@/lib/types';

type HttpApiOptions = MethodBodyOptions & {
	hasAuth?: boolean;
	query?: Record<string, unknown>;
	contentType?: ValueOf<typeof ContentType>;
	next?: NextFetchRequestConfig;
	cache?: RequestCache;
	signal?: AbortSignal;
};

export { type HttpApiOptions };
