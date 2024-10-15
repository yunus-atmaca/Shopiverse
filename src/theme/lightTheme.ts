import {ThemeColors} from './types';
import {palette} from './palette';

const lightTheme: ThemeColors = {
  page: palette.gray100,

  button: palette.orange,
  buttonText: palette.white,
  buttonPressed: palette.orange100,
  buttonDisabled: palette.gray500,
  buttonTextDisabled: palette.gray600,

  text: palette.black,
  textReversed: palette.white,
  textSub: palette.gray600,
  textError: palette.red,
  textHighlighted: palette.orange,

  icon: palette.black,
  iconLight: palette.gray600,
  iconReversed: palette.white,
  iconBG: palette.white,
  iconHighlighted: palette.orange,
  iconError: palette.red,

  border: palette.gray600,
  borderLight: palette.gray400,
  borderHighlighted: palette.orange,
  borderError: palette.red,

  tabbarBG: palette.white,
  tabbarFocusedTab: palette.orange,
  tabbarUnFocusedTab: palette.gray600,

  appHeaderBG: palette.white,

  boxBG: palette.white,
  boxBGHighlighted: palette.orange,

  inputCursor: palette.orange,
  inputPlaceHolder: palette.gray600,

  checkBoxFilled: palette.orange,
  checkBoxUnFilled: palette.white,

  indicatorFocused: palette.black,
  indicatorUnfocused: palette.gray500,

  star: palette.yellow,
  starHighlighted: palette.orange,

  error: palette.red,
  success: palette.green,
  warning: palette.yellow,
};

export default lightTheme;
