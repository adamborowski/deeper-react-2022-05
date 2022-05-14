import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import React, { useMemo } from 'react';
import { useLogin } from '../features/login/useLogin';
import { useThemeSwitch } from '../features/theme-switcher/useThemeSwitch';
import { initializeFirebaseApp } from '../services/firebase';
import './App.css';
import { AppPure } from './App.pure';
import { ThemeProvider } from './utils/ThemeProvider';

const App = () => {
  const { theme, toggleTheme } = useThemeSwitch();
  const app = useMemo(initializeFirebaseApp, []);
  const auth = getAuth(app);
  const login = useLogin(auth);
  const db = useMemo(() => getFirestore(app), [app]);

  return (
    <ThemeProvider theme={theme}>
      <AppPure login={login} onThemeToggle={toggleTheme} db={db} />
    </ThemeProvider>
  );
};

export default App;
