import type { ValueOf } from '@/lib/types';

import type { StorageType } from '../enums';

import { MemoryStorage } from './memory-storage';

export function getStorage(storageType: ValueOf<typeof StorageType>): globalThis.Storage {
	if (typeof window === 'undefined') {
		return new MemoryStorage();
	}
	return storageType === 'local' ? window.localStorage : window.sessionStorage;
}
