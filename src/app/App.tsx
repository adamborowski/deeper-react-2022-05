import { RiLightbulbFill } from 'react-icons/ri';
import { Button } from '../common/atoms/Button';
import { Menu } from '../common/atoms/Menu';
import { MenuItem } from '../common/atoms/MenuItem';
import { MenuSpacer } from '../common/atoms/MenuSpacer';
import { ThemeButton } from '../features/theme-switcher/ThemeButton';
import './App.css';
import { Logo } from './utils/Logo';
import { ThemeName, ThemeProvider, ThemeProviderProps } from './utils/ThemeProvider';
import { useState } from 'react';



const App = () => {
  const [layout, setLayout] = useState<ThemeName>('light')

  const changeLayout = () => {
    setLayout(layout === 'dark' ? "light": "dark");
  }

  return (
    <ThemeProvider theme={layout}>

      <Menu>
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

          <ThemeButton onClick={changeLayout}/>
        </Menu>

      </Menu>
    </ThemeProvider>
  );
};

export default App;
