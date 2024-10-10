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
  textReversed: ColorValue;
  textSub: ColorValue;
  textError: ColorValue;
  textHighlighted: ColorValue;

  icon: ColorValue;
  iconLight: ColorValue;
  iconReversed: ColorValue;
  iconBG: ColorValue;
  iconHighlighted: ColorValue;
  iconError: ColorValue;

  border: ColorValue;
  borderLight: ColorValue;
  borderHighlighted: ColorValue;
  borderError: ColorValue;

  tabbarBG: ColorValue;
  tabbarFocusedTab: ColorValue;
  tabbarUnFocusedTab: ColorValue;

  appHeaderBG: ColorValue;

  boxBG: ColorValue;
  boxBGHighlighted: ColorValue;

  inputCursor: ColorValue;
  inputPlaceHolder: ColorValue;

  checkBoxFilled: ColorValue;
  checkBoxUnFilled: ColorValue;
};

export type {ThemeColors};
