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
  textActive: ColorValue;

  icon: ColorValue;
  iconBackground: ColorValue;

  markers: ColorValue;

  border: ColorValue;

  tabbar: ColorValue;
  tabbarIconActive: ColorValue;
  tabbarIconPassive: ColorValue;

  appHeaderBackground: ColorValue;

  inputBackground: ColorValue;
  inputBorder: ColorValue;
  inputCursor: ColorValue;
  inputText: ColorValue;
  inputPlaceHolder: ColorValue;

  line: ColorValue;

  checkBoxFilled: ColorValue;
  checkBoxUnFilled: ColorValue;
};

export type {ThemeColors};
