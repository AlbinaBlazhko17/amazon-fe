import type { ValueOf } from '@/lib/types';

import type { StorageKey } from './libs/enums';
import type { Storage } from './libs/types';

class BaseStorage implements Storage {
	private store: globalThis.Storage;

	public constructor(store: globalThis.Storage) {
		this.store = store;
	}

	public set(key: ValueOf<typeof StorageKey>, value: string): Promise<void> {
		this.store.setItem(key, value);

		return Promise.resolve();
	}

	public get<R = string>(key: ValueOf<typeof StorageKey>): Promise<R | null> {
		return Promise.resolve(this.store.getItem(key) as R);
	}

	public drop(key: ValueOf<typeof StorageKey>): Promise<void> {
		this.store.removeItem(key);

		return Promise.resolve();
	}

	public async has(key: ValueOf<typeof StorageKey>): Promise<boolean> {
		const value = await this.get(key);

		return Boolean(value);
	}
}

export { BaseStorage };
