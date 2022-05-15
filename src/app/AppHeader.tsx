import React from 'react';
import { Button } from '../common/atoms/Button';
import { MenuItem } from '../common/atoms/MenuItem';
import { AppHeaderLayout } from '../common/templates/AppHeaderLayout';
import { toMoviesPage } from '../features/movie-browser/routes';
import { ThemeButton } from '../features/theme-switcher/ThemeButton';
import styles from './AppHeader.module.css';
import { TopMenu } from './TopMenu';
import { UserInfo } from './UserInfo';
import { Logo } from './utils/Logo';

interface AppHeaderProps {
  email: string | null;
  onLogoutClick: () => void;
  onLoginClick: () => void;
  onThemeToggle: () => void;
}

export const AppHeader = ({
  onLogoutClick,
  onLoginClick,
  onThemeToggle,
  email,
}: AppHeaderProps) => {
  const isAuthenticated = !!email;

  return (
    <AppHeaderLayout
      className={styles.root}
      extra={
        <>
          {isAuthenticated ? (
            <>
              <UserInfo email={email} />
              <Button onClick={onLogoutClick}>Wyloguj</Button>
            </>
          ) : (
            <Button onClick={onLoginClick}>Zaloguj</Button>
          )}
          <ThemeButton onClick={onThemeToggle}>Skórka</ThemeButton>
        </>
      }
    >
      <Logo />
      <TopMenu>
        <MenuItem to="/sport">Sport</MenuItem>
        <MenuItem to="/news">Wiadomości</MenuItem>
        <MenuItem to={toMoviesPage()}>Filmy</MenuItem>
        <MenuItem to="/music">Muzyka</MenuItem>
        <MenuItem to="/admin">Admin</MenuItem>
      </TopMenu>
    </AppHeaderLayout>
  );
};
