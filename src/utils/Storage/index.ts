import {ValueOf} from 'type-fest';

import {MMKV} from 'react-native-mmkv';
import StorageKeys from './storageKeys';

export type KEYS = ValueOf<typeof StorageKeys>;

export const storage = new MMKV();

function set(key: KEYS, val: string | boolean | number | object) {
  storage.set(key, JSON.stringify(val));
}

function get(key: KEYS) {
  const res = storage.getString(key);
  return res ? JSON.parse(res) : null;
}

function deleteKey(key: KEYS) {
  storage.delete(key);
}

export {set, get, deleteKey, StorageKeys as Keys};
