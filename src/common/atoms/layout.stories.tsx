import { Layout } from './Layout';
import { Menu } from './Menu';
import { MenuItem } from './MenuItem';

export default {};

export const Layouts = () => {

  const top = <Menu>
    <MenuItem to='/sport'>Sport</MenuItem>
    <MenuItem to='/news'>Wiadomości</MenuItem>
    <MenuItem to='/movies'>Filmy</MenuItem>
    <MenuItem to='/music'>Muzyka</MenuItem>
    <MenuItem to='/admin'>Admin</MenuItem>
  </Menu>;

  const aside = <>
    <MenuItem to='/settings'>Ustawienia</MenuItem>
    <MenuItem to='/profile'>Profil</MenuItem>
  </>

  return <>
    <h2>Empty layout</h2>
    <Layout top="Menu" aside="Aside">Content</Layout>

    <h2>Filled layout</h2>
    <Layout top={top} aside={aside}>Content</Layout>

  </>
};
