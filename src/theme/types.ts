import {ColorValue} from 'react-native';

export enum ThemePreference {
  DARK = 'dark',
  LIGHT = 'light',
  DEFAULT = 'system',
}

export enum ColorScheme {
  DARK = 'dark',
  LIGHT = 'light',
}

type ThemeColors = {
  page: ColorValue;

  buttonDefault: ColorValue;
  buttonPressed: ColorValue;
  buttonDisabled: ColorValue;
  buttonTextDefault: ColorValue;
  buttonTextPressed: ColorValue;
  buttontextDisabled: ColorValue;

  textLight: ColorValue;
  textDark: ColorValue;
  textError: ColorValue;
};

export type {ThemeColors};
