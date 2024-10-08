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
  textSub: palette.gray600,
  textReversed: palette.white,
  textError: palette.red,
  textActive: palette.orange,

  icon: palette.black,
  iconBackground: palette.white,

  markers: palette.orange,

  border: palette.gray400,

  tabbar: palette.white,
  tabbarIconActive: palette.orange,
  tabbarIconPassive: palette.gray600,

  appHeaderBackground: palette.white,

  inputBackground: palette.white,
  inputBorder: palette.gray600,
  inputCursor: palette.orange,
  inputText: palette.black,
  inputPlaceHolder: palette.gray600,

  line: palette.gray600,

  checkBoxFilled: palette.orange,
  checkBoxUnFilled: palette.white,
};

export default lightTheme;
