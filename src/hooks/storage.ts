import {useMMKVString} from 'react-native-mmkv';
import {KEYS} from '@/utils/Storage';

const useLocalStorageValue = (key: KEYS) => {
  const [val, setValue] = useMMKVString(key);

  return {
    val,
    setValue,
  };
};

export {useLocalStorageValue};
