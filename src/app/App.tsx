import React, { useState } from 'react';
import { Button } from '../common/atoms/Button';
import './App.css';
import { ThemeName, ThemeProvider } from './utils/ThemeProvider';
import { MenuItem } from '../common/atoms/MenuItem';
import { Menu } from './Menu';
import { ThemeButton } from '../features/theme-switcher/ThemeButton';
import { useThemeSwitcher } from './useThemeSwitcher';

const App = () => {
  const themeSwitcher = useThemeSwitcher();


  return (
    <ThemeProvider theme={themeSwitcher.theme}>
      <div>
        <Menu>
          <MenuItem to="/about">O nas</MenuItem>
          <MenuItem to="/movies">Filmy</MenuItem>
          <MenuItem to="/news">Wiadomości</MenuItem>
          <MenuItem to="/sport">Sport</MenuItem>
          <MenuItem to="/admin">Admin</MenuItem>
          <ThemeButton onClick={themeSwitcher.toggleTheme} />
        </Menu>
      </div>
    </ThemeProvider>
  );
};

export default App;
