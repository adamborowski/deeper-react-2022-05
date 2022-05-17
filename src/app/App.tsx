import React, { useState } from 'react';
import { MenuItem } from '../common/atoms/MenuItem';
import './App.css';
import { ThemeProvider } from './utils/ThemeProvider';
import { Menu } from './Menu';
import { Button } from '../common/atoms/Button';
import { ThemeButton } from '../features/theme-switcher/ThemeButton';

const nav = [
  {
    name: 'Sport',
    url: '/sport',
  },
  {
    name: 'Wiadomości',
    url: '/wiadomosci',
  },
  {
    name: 'Filmy',
    url: '/filmy',
  },
  {
    name: 'Muzyka',
    url: '/muzyka',
  },
];

const App = () => {

  const [theme, setToogle] = useState<any>('light')

  const navEl = nav.map((el) => (
    <MenuItem to={el.url} key={el.url}>
      {el.name}
    </MenuItem>
  ));

  function toogleTheme(e:any) {

    if(theme==="light"){
      setToogle("dark")
      console.log('Kliknięto na przycisk', theme);
    } else {
      setToogle("light")
      console.log('Kliknięto na przycisk', theme);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Menu></Menu>
      <Button>Wyloguj</Button>
      <ThemeButton onClick={toogleTheme}></ThemeButton>
    </ThemeProvider>
  );
};

export default App;

