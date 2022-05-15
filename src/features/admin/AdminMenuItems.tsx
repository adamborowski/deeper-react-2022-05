import React, { FC } from 'react';
import { MenuItem } from '../../common/atoms/MenuItem';
import { RequireAuth } from '../../common/containers/RequireAuth';
import { UseLogin } from '../login/useLogin';
import { toAdminPage } from './routes';
import { toAdminUsersPage } from './users/routes';

type AdminMenuItems = FC<{ login: UseLogin }>;
export const AdminMenuItems: AdminMenuItems = ({ login }) => (
  <RequireAuth login={login}>
    <MenuItem end to={toAdminPage()}>
      Panel administracyjny
    </MenuItem>
    <MenuItem to={toAdminUsersPage()}>Użytkownicy</MenuItem>
  </RequireAuth>
);
