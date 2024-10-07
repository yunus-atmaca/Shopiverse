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

  icon: palette.black,
  iconBackground: palette.white,

  markers: palette.orange,

  borderColor: palette.gray400,
};

export default lightTheme;
