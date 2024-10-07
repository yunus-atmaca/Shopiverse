import {ValueOf} from 'type-fest';

import {MMKV} from 'react-native-mmkv';
import StorageKeys from './storageKeys';

export type KEYS = ValueOf<typeof StorageKeys>;

export const storage = new MMKV();

function set(key: KEYS, val: string | boolean | number) {
  storage.set(key, JSON.stringify(val));
}

function get(key: KEYS) {
  const res = storage.getString(key);
  return res ? JSON.parse(res) : null;
}

export {set, get, StorageKeys as Keys};
