import light from './lightTheme';
import {ThemeColors, ThemePreference} from './types';

const themes: Record<ThemePreference, ThemeColors> = {
  light: light,
  dark: light,
  system: light,
};

const defaultTheme = themes.system;

export {defaultTheme};
export default themes;
