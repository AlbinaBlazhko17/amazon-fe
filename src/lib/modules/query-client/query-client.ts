import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';

import { HttpCode, HttpError } from '../http';

function isUnauthorizedError(error: unknown) {
	return error instanceof HttpError && error.status === HttpCode.UNAUTHORIZED;
}

interface CreateQueryClientParams {
	onUnauthorized?: (error: unknown) => Promise<void> | void;
}

export const createQueryClient = ({ onUnauthorized }: CreateQueryClientParams): QueryClient => {
	return new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 5 * 60 * 1000,
				refetchOnWindowFocus: false,
				refetchOnReconnect: true,
				refetchOnMount: false,
				retry: (failureCount, error) => {
					if (isUnauthorizedError(error)) {
						return false;
					}
					return failureCount < 1;
				}
			},
			mutations: {
				retry: false
			}
		},
		queryCache: new QueryCache({
			onError: async error => {
				if (isUnauthorizedError(error)) {
					onUnauthorized?.(error);
				}
			}
		}),
		mutationCache: new MutationCache({
			onError: async error => {
				if (isUnauthorizedError(error)) {
					onUnauthorized?.(error);
				}
			}
		})
	});
};
