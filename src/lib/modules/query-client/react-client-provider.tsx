'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

import { QueryBaseKey } from '@/lib/enums';
import { StorageKey, storage } from '@/lib/modules/storage';

import { createQueryClient } from './query-client';

export const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
	const [queryClient] = useState(() =>
		createQueryClient({
			onUnauthorized: async () => {
				storage.drop(StorageKey.TOKEN);

				queryClient.setQueriesData(
					{
						predicate: ({ queryKey: [key] }) =>
							[QueryBaseKey.AUTH_TOKEN, QueryBaseKey.USER].some(k => k === key)
					},
					() => null
				);
			}
		})
	);

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};
