import { FC, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { toLoginPage } from '../../features/login/routes';
import { UseLogin } from '../../features/login/useLogin';

export interface AuthenticatedPageProps {
  login: UseLogin; // could be just user or isLoggedIn but in most cases it's easier to pass the whole hook result
  children: ReactNode;
}

export const RequireAuth: FC<AuthenticatedPageProps> = ({
  login,
  children,
}) => {
  const location = useLocation();

  return login.user ? (
    <>{children}</>
  ) : (
    <Navigate to={toLoginPage()} state={{ from: location }} replace />
  );
};
