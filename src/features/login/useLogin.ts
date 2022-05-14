import {
  Auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toLoginPage } from './routes';

type InitialState = { type: 'initial' };
type LoginIdleState = { type: 'login-anonymous' };
type LoginPendingState = { type: 'login-pending' };
type LoginErrorState = { type: 'login-error'; message: string };
export type LoginSuccessState = { type: 'login-success'; user: User };
type RegisterIdleState = { type: 'register-idle' };
type RegisterPendingState = { type: 'register-pending' };
type RegisterErrorState = { type: 'register-error'; message: string };
export type SignInState =
  | InitialState
  | LoginIdleState
  | LoginPendingState
  | LoginErrorState
  | LoginSuccessState
  | RegisterIdleState
  | RegisterPendingState
  | RegisterErrorState;

export type UseLogin = ReturnType<typeof useLogin>;

export const useLogin = (auth: Auth) => {
  const [state, setState] = useState<SignInState>(
    auth.currentUser
      ? { type: 'login-success', user: auth.currentUser }
      : { type: 'initial' }
  );

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setState({ type: 'login-success', user });
      } else {
        setState({ type: 'login-anonymous' });
      }
    });
  }, []);

  return {
    user: state.type === 'login-success' ? state.user : undefined,
    state,
    logout: () => signOut(auth),
    login: async (
      email: string,
      password: string,
      successRedirection?: string
    ) => {
      setState({ type: 'login-pending' });
      try {
        await signInWithEmailAndPassword(auth, email, password);
        successRedirection && navigate(successRedirection, { replace: true });
        // we don't need to setState again, this is done by onAuthStateChanged
      } catch (error: unknown) {
        if (error instanceof Error) {
          setState({ type: 'login-error', message: error.message });
        } else {
          throw error;
        }
      }
    },
    gotoRegister: () => setState({ type: 'register-idle' }),
    gotoLogin: () => setState({ type: 'login-anonymous' }),
    register: async (email: string, password: string) => {
      setState({ type: 'register-pending' });
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setState({ type: 'register-error', message: error.message });
        } else {
          throw error;
        }
      }
    },
    navigateToLoginPage: () => {
      navigate(toLoginPage());
    },
  };
};
