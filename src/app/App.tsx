import React, { useState } from 'react';
import { Button } from '../common/atoms/Button';
import './App.css';
import { ThemeName, ThemeProvider } from './utils/ThemeProvider';
import { MenuItem } from '../common/atoms/MenuItem';
import { Menu } from './Menu';
import { ThemeButton } from '../features/theme-switcher/ThemeButton';
import { useThemeSwitcher } from './useThemeSwitcher';
import { PageLayout } from '../common/layouts/PageLayout';
import { Route, Routes } from 'react-router-dom';
import { MoviesSidebar } from '../features/movies/MoviesSidebar';

const App = () => {
  const themeSwitcher = useThemeSwitcher();

  return (
    <ThemeProvider theme={themeSwitcher.theme}>
      <PageLayout
        headerContent={
          <Menu>
            <MenuItem to="/about">O nas</MenuItem>
            <MenuItem to="/movies">Filmy</MenuItem>
            <MenuItem to="/news">Wiadomości</MenuItem>
            <MenuItem to="/sport">Sport</MenuItem>
            <MenuItem to="/admin">Admin</MenuItem>
            <ThemeButton onClick={themeSwitcher.toggleTheme} />
          </Menu>
        }
        sidebarContent={
          <Routes>
            <Route
              path="/admin/*"
              element={
                <>
                  <MenuItem to="/admin/users">Users</MenuItem>
                  <MenuItem to="/admin/reports">Reports</MenuItem>
                  <MenuItem to="/admin/settings">Settings</MenuItem>
                </>
              }
            />
            <Route path="/movies" element={<MoviesSidebar/>} />
            <Route path="*" element={null} />
          </Routes>
        }
        mainContent={
          <div>
            <Routes>
              <Route path="/about" element="O nas" />
              <Route path="/news" element="Newsy" />
              <Route path="/movies" element="Filmy" />
              <Route path="/sport" element="sport" />
              <Route path="/sport/pilka" element="sportowa pilka" />
              <Route path="/sport/siatka" element="sportowa siatka" />
              <Route
                path="/sport/:disciplineId"
                element="jakaś inna dyscyplina"
              />
              <Route path="/admin/*" element="admin" />
              <Route path="*" element="Brak strony" />
            </Routes>
          </div>
        }
      />
    </ThemeProvider>
  );
};

export default App;
