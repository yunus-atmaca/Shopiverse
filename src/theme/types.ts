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

  button: ColorValue;
  buttonText: ColorValue;
  buttonPressed: ColorValue;
  buttonDisabled: ColorValue;
  buttonTextDisabled: ColorValue;

  text: ColorValue;
  textSub: ColorValue;
  textReversed: ColorValue;
  textError: ColorValue;

  icon: ColorValue;
  iconBackground: ColorValue;

  markers: ColorValue;

  border: ColorValue;

  tabbar: ColorValue;
  tabbarIconActive: ColorValue;
  tabbarIconPassive: ColorValue;
};

export type {ThemeColors};
