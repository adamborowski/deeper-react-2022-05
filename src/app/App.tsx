import { Button } from '../common/atoms/Button';
import { Menu } from '../common/atoms/Menu';
import { MenuItem } from '../common/atoms/MenuItem';
import { MenuSpacer } from '../common/atoms/MenuSpacer';
import { ThemeButton } from '../features/theme-switcher/ThemeButton';
import './App.css';
import { Logo } from './utils/Logo';
import { Layout } from '../common/atoms/Layout';
import { useThemeSwitch } from './useThemeSwitch';
import { ThemeProvider } from './utils/ThemeProvider';

const App = () => {
  const themeSwitch = useThemeSwitch();

  const top = <Menu>
    <Logo/>

    <MenuSpacer/>

    <Menu>
      <MenuItem to='/sport'>Sport</MenuItem>
      <MenuItem to='/news'>Wiadomości</MenuItem>
      <MenuItem to='/movies'>Filmy</MenuItem>
      <MenuItem to='/music'>Muzyka</MenuItem>
      <MenuItem to='/admin'>Admin</MenuItem>
    </Menu>

    <MenuSpacer/>

    <Menu>
      <Button>Wyloguj</Button>

      <ThemeButton onClick={themeSwitch.toggle}/>
    </Menu>

  </Menu>;

  const aside = <>
    <MenuItem to='/settings'>Ustawienia</MenuItem>
    <MenuItem to='/profile'>Profil</MenuItem>
  </>;

  const main = <>Nie znaleziono strony...</>;

  return (
    <ThemeProvider theme={themeSwitch.theme}>

      <Layout top={top} aside={aside}>
        {main}
      </Layout>
    </ThemeProvider>
  );
};

export default App;
