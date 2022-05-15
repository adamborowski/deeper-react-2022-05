import { Firestore } from 'firebase/firestore';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from '../common/containers/RequireAuth';
import { AppLayout } from '../common/templates/AppLayout';
import { AdminMenuItems } from '../features/admin/AdminMenuItems';
import { toAdminPage } from '../features/admin/routes';
import { toAdminUsersPage } from '../features/admin/users/routes';
import { UserListPage } from '../features/admin/users/UserListPage';
import { LoginPage } from '../features/login/LoginPage';
import { toLoginPage } from '../features/login/routes';
import { UseLogin } from '../features/login/useLogin';
import { MovieDetails } from '../features/movie-browser/movie-details/MovieDetails';
import { MovieList } from '../features/movie-browser/movie-list/MovieList';
import {
  toMovieDetailsPage,
  toMoviesPage,
} from '../features/movie-browser/routes';
import { AppHeader } from './AppHeader';

interface AuthenticatedAppProps {
  login: UseLogin; // this app can accept a higher level hook result that could be lifted up and down
  onThemeToggle: () => void;
  db: Firestore;
}

export const AppPure = ({ login, onThemeToggle }: AuthenticatedAppProps) => (
  <AppLayout
    sidebarContent={
      <Routes>
        {/* TODO explain why having sidebar part of some <AdminPages/> component would be a problem*/}
        <Route
          path={`${toAdminPage()}/*`}
          element={<AdminMenuItems login={login} />}
        />
        <Route path="*" element={null} />
      </Routes>
    }
    headerContent={
      <AppHeader
        email={login.user?.email ?? null}
        onLogoutClick={login.logout}
        onLoginClick={login.navigateToLoginPage}
        onThemeToggle={onThemeToggle}
      />
    }
  >
    <Routes>
      <Route path={toLoginPage()} element={<LoginPage login={login} />} />
      <Route path={toMoviesPage()} element={<MovieList />} />
      <Route path={toMovieDetailsPage()} element={<MovieDetails />} />
      <Route
        path={toAdminUsersPage()}
        element={
          <RequireAuth login={login}>
            <UserListPage />
          </RequireAuth>
        }
      />
      <Route path="*" element="Nie znaleziono strony" />
    </Routes>
  </AppLayout>
);
