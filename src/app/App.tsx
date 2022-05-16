import { RiLightbulbFill } from 'react-icons/ri';
import { Button } from '../common/atoms/Button';
import { Menu } from '../common/atoms/Menu';
import { MenuItem } from '../common/atoms/MenuItem';
import { MenuSpacer } from '../common/atoms/MenuSpacer';
import './App.css';
import { Logo } from './utils/Logo';
import { ThemeProvider } from './utils/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider theme="light">
      <Menu>
        <Logo/>

        <MenuSpacer/>
        <MenuSpacer/>

        <MenuItem to='/sport'>Sport</MenuItem>
        <MenuItem to='/news'>Wiadomości</MenuItem>
        <MenuItem to='/movies'>Filmy</MenuItem>
        <MenuItem to='/music'>Muzyka</MenuItem>
        <MenuItem to='/admin'>Admin</MenuItem>

        <MenuSpacer/>
        <MenuSpacer/>

        <Button>Wyloguj</Button>

        <MenuSpacer/>

        <Button>
          <RiLightbulbFill/>
        </Button>

      </Menu>
    </ThemeProvider>
  );
};

export default App;
