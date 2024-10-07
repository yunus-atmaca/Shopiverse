import {defaultTheme} from './index';
import {ThemeColors} from './types';
import {createContext} from 'react';
const ThemeContext = createContext<ThemeColors>(defaultTheme);

export default ThemeContext;
