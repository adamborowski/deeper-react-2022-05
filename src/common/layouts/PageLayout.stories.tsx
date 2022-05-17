import { PageLayout } from './PageLayout';
import { Menu } from '../../app/Menu';
import { MenuItem } from '../atoms/MenuItem';
import { ThemeButton } from '../../features/theme-switcher/ThemeButton';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

export default {};

export const Default = () => {
  return (
    <PageLayout
      headerContent="I am a header"
      sidebarContent="I am a sidebar!"
      mainContent="I am children"
    />
  );
};

export const WithSomeHeader = () => {
  return (
    <PageLayout
      headerContent={
        <Menu>
          <MenuItem to="/about">O nas</MenuItem>
          <MenuItem to="/movies">Filmy</MenuItem>
          <MenuItem to="/news">Wiadomości</MenuItem>
          <MenuItem to="/sport">Sport</MenuItem>
          <MenuItem to="/admin">Admin</MenuItem>
          <ThemeButton />
        </Menu>
      }
      sidebarContent={
        <>
          <MenuItem to="/about">O nas</MenuItem>
          <MenuItem to="/movies">Filmy</MenuItem>
          <MenuItem to="/news">Wiadomości</MenuItem>
          <MenuItem to="/sport">Sport</MenuItem>
          <MenuItem to="/admin">Admin</MenuItem>
        </>
      }
      mainContent={
        <div>
          <h3>Siemka</h3>
          <Routes>
            <Route path="/about" element="O nas" />
            <Route path="/news" element="Newsy" />
            <Route path="/sport" element="sport" />
            <Route path="/sport/pilka" element="sportowa pilka" />
            <Route path="/sport/siatka" element="sportowa siatka" />
            <Route
              path="/sport/:disciplineId"
              element="jakaś inna dyscyplina"
            />
            <Route path="/admin" element="admin" />
            <Route path="*" element="Brak strony" />
          </Routes>
          <h3>Narka</h3>
          <div>
            <Link to="/sport/pilka">Idź do piłki</Link>
          </div>
          <div>
            <Link to="/sport/skoki">Idź do skoków</Link>
          </div>
        </div>
      }
    />
  );
};
