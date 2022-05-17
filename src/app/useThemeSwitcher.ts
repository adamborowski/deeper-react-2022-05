import { useState } from 'react';
import { ThemeName } from './utils/ThemeProvider';

export const useThemeSwitcher = () => {
  const [theme, setTheme] = useState<ThemeName>(() => {
    const themeFromLocalStorage = localStorage.getItem('themeName');
    return themeFromLocalStorage === 'dark' ? 'dark' : 'light';
  });

  const toggleTheme = () => {
    const newThemeName = theme === 'dark' ? 'light' : 'dark';
    setTheme(newThemeName);
    localStorage.setItem('themeName', newThemeName);
  };

  return {
    theme,
    toggleTheme,
  };
};
