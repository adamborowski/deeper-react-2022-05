import { FormEvent, useState } from 'react';
import { Button } from '../../components/atoms/Button';
import { Input } from '../../components/atoms/Input';
import styles from './LoginPagePure.module.css';
import { SignInState } from './useLogin';

export interface LoginScreenProps {
  onLoginSubmit: (email: string, password: string) => void;
  onRegisterSubmit: (email: string, password: string) => void;
  signInState: SignInState;
  onGotoRegisterClick: () => void;
  onGotoLoginClick: () => void;
}

export const LoginPagePure = ({
  onLoginSubmit,
  onRegisterSubmit,
  signInState,
  onGotoRegisterClick,
  onGotoLoginClick,
  ...rest
}: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoginScreen = signInState.type.startsWith('login');
  const isRegisterScreen = signInState.type.startsWith('register');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (isLoginScreen) {
      onLoginSubmit(email, password);
    } else if (isRegisterScreen) {
      onRegisterSubmit(email, password);
    }
  };

  if (signInState.type === 'initial') {
    return null; // empty loading screen
  }

  return (
    <form {...rest} className={styles.root} onSubmit={handleSubmit}>
      {isLoginScreen && <h1>Logowanie</h1>}
      {isRegisterScreen && <h1>Rejestracja</h1>}
      <label htmlFor="login-email">Login</label>
      <Input
        id="login-email"
        type="text"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label htmlFor="login-password">Password</label>
      <Input
        id="login-password"
        type="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      {isRegisterScreen && (
        <>
          <Button type="submit">Rejestruj</Button>
          <div className={styles.loginInfo}>
            Zarejestruj się przy użyciu adresu email oraz hasła.{' '}
            <Button onClick={onGotoLoginClick}>Logowanie</Button>
          </div>
          {signInState.type === 'register-pending' && (
            <div>rejestrowanie...</div>
          )}
          {signInState.type === 'register-error' && (
            <div>błąd rejestracji: {signInState.message}</div>
          )}
        </>
      )}

      {isLoginScreen && (
        <>
          <Button type="submit">Zaloguj</Button>
          <div className={styles.loginInfo}>
            Zaloguj się przy użyciu adresu email oraz hasła.{' '}
            <Button onClick={onGotoRegisterClick}>Rejestracja</Button>
          </div>
          {signInState.type === 'login-pending' && <div>logowanie...</div>}
          {signInState.type === 'login-error' && (
            <div>błąd: {signInState.message}</div>
          )}
        </>
      )}
    </form>
  );
};
