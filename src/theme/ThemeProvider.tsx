import React, {useEffect, useState} from 'react';
import themes from './index';
import ThemeContext from './ThemeContext';
import type {ThemePreference} from './types';

import {Storage} from '@/utils';

type ThemeProviderProps = React.PropsWithChildren & {
  theme?: ThemePreference;
};

function ThemeProvider({
  children,
  theme: staticThemePreference,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState(themes.system);

  useEffect(() => {
    const theme = Storage.get(Storage.Keys.PREFERRED_THEME) as ThemePreference;
    if (theme) setTheme(themes[theme]);
  }, []);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
