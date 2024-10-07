import {useContext} from 'react';
import ThemeContext from '@/theme/ThemeContext';
import {useMMKVString} from 'react-native-mmkv';
import {Storage} from '@/utils';

const useTheme = () => {
  const theme = useContext(ThemeContext);

  return theme;
};

const usePreferredTheme = () => {
  const [theme] = useMMKVString(Storage.Keys.PREFERRED_THEME);
  return theme;
};

export {useTheme, usePreferredTheme};
