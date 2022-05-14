import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { LoginPagePure } from './LoginPagePure';
import { UseLogin } from './useLogin';

type AnonymousAppProps = {
  login: UseLogin;
};

export const LoginPage = ({ login }: AnonymousAppProps) => {
  const location = useLocation();
  const from =
    (location.state as Record<string, Record<string, string>>)?.from
      ?.pathname || '/';

  const handleSubmit = (email: string, password: string) => {
    void login.login(email, password, from);
  };

  return login.user ? (
    <Navigate to={from} replace />
  ) : (
    <LoginPagePure
      onGotoRegisterClick={login.gotoRegister}
      onGotoLoginClick={login.gotoLogin}
      onLoginSubmit={handleSubmit}
      onRegisterSubmit={login.register}
      signInState={login.state}
    />
  );
};
