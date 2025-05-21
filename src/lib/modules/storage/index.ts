'use client';

import { StorageType } from './libs/enums';
import { getStorage } from './libs/utils';
import { BaseStorage } from './storage.module';

const storage = new BaseStorage(getStorage(StorageType.LOCAL));

export { storage };
export { StorageKey } from './libs/enums';
export { type Storage } from './libs/types';
