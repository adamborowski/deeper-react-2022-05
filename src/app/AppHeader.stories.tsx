import { AppHeader } from './AppHeader';

export default {};

export const Default = () => (
  <AppHeader
    email="adam@workshop.pl"
    onLogoutClick={console.log}
    onLoginClick={console.log}
    onThemeToggle={console.log}
  />
);

export const Anonymous = () => (
  <AppHeader
    email={null}
    onLogoutClick={console.log}
    onLoginClick={console.log}
    onThemeToggle={console.log}
  />
);
