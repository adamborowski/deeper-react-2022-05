import { Menu } from './Menu';
import { MenuItem } from '../common/atoms/MenuItem';
import { Button } from '../common/atoms/Button';

export default {}

export const Default = ()=>{
  return <Menu>
    <MenuItem to="/about">About</MenuItem>
    <Button>cokolwiek</Button>
    <MenuItem to="/login">Login</MenuItem>
  </Menu>
}

export const ManyItems = ()=>{
  return <Menu>
    <MenuItem to="/about">About</MenuItem>
    <MenuItem to="/about2">About</MenuItem>
    <MenuItem to="/about2">About</MenuItem>
    <MenuItem to="/about3">About</MenuItem>
    <MenuItem to="/about4">About</MenuItem>
    <MenuItem to="/about">About</MenuItem>
    <MenuItem to="/about">About</MenuItem>
    <MenuItem to="/about">About</MenuItem>
    <MenuItem to="/about">About</MenuItem>
    <MenuItem to="/about">About</MenuItem>
    <MenuItem to="/about">About</MenuItem>
    <MenuItem to="/about">About</MenuItem>
    <MenuItem to="/about">About</MenuItem>
    <MenuItem to="/about">About</MenuItem>
    <MenuItem to="/about">About</MenuItem>
    <MenuItem to="/about">About</MenuItem>
    <Button>cokolwiek</Button>
    <MenuItem to="/login">Login</MenuItem>
  </Menu>
}
