import { useState } from 'react';

export type ThemeName = 'dark' | 'light';

/**
 * działanie zapamiętywania theme została opakowana w tzw. custom hook i używa się identycznie jak useState()
 */
export const useThemeSwitch = () => {
  const [theme, setTheme] = useState<ThemeName>(
    () => (localStorage.getItem('app-theme') as ThemeName) ?? 'light'
  );

  const setAndStoreTheme = (newTheme: ThemeName) => {
    localStorage.setItem('app-theme', newTheme);
    setTheme(newTheme);
  };

  return {
    theme,
    toggleTheme: () => setAndStoreTheme(theme === 'light' ? 'dark' : 'light'),
  };
};
