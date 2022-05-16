import { RiHeartFill } from 'react-icons/ri';
import { Button } from './Button';
import { Input } from './Input';
import { MenuItem } from './MenuItem';
import { TextArea } from './TextArea';
import { Menu } from './Menu';

export default {};

export const Buttons = () => (
  <div>
    <h2>Basic button</h2>
    <Button>Button</Button>
    <h2>Button with icon</h2>
    <Button>
      Button with <RiHeartFill />
    </Button>
  </div>
);

export const Inputs = () => (
  <div>
    <h2>Basic button</h2>
    <Input defaultValue="some value" />
    <h2>Textarea</h2>
    <TextArea defaultValue="textarea value"></TextArea>
  </div>
);

export const MenuItems = () => (
  <div>
    <MenuItem to="/home">Home</MenuItem>
    <MenuItem to="/cart">Cart</MenuItem>
    <MenuItem to="/settings">Settings</MenuItem>
    <MenuItem to="/about">About us</MenuItem>
  </div>
);

export const Menus = () => (
  <>
    <Menu>
      <MenuItem to='/sport'>Sport</MenuItem>
      <MenuItem to='/news'>Wiadomości</MenuItem>
      <MenuItem to='/movies'>Filmy</MenuItem>
      <MenuItem to='/music'>Muzyka</MenuItem>
      <MenuItem to='/admin'>Admin</MenuItem>
    </Menu>

    <Menu>
      <Button>Wyloguj</Button>
      <Button>Moje konto</Button>
    </Menu>
  </>
);
