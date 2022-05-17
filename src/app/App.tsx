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
import { Route, Routes } from 'react-router-dom';
import { MoviesList } from '../features/movies/MoviesList';
import { MovieDetails } from '../features/movies/MovieDetails';

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

  const aside =
    <Routes>
      <Route path='/admin/*' element={
        <>
          <MenuItem to='/admin/settings'>Ustawienia</MenuItem>
          <MenuItem to='/admin/users'>Użytkownicy</MenuItem>
          <MenuItem to='/admin/reports'>Raporty</MenuItem>
        </>
      }></Route>
      <Route path="/movies/*" element={
        <MoviesList />}>
      </Route>
      <Route path="*" element={null}></Route>
    </Routes>
;

  const main = <Routes>
    <Route path='/sport' element="Sport"></Route>
    <Route path='/news' element="Wiadomości"></Route>
    <Route path='/movies' element="Filmy"></Route>
    <Route path='/movies/:movieId' element={<MovieDetails/>}></Route>
    <Route path='/music' element="Muzyka"></Route>
    <Route path='/admin/*' element="Admin"></Route>
    <Route path='/settings' element="Ustawienia"></Route>
    <Route path='/profile' element="Profil"></Route>
    <Route path="*" element={<><h1>404</h1><h2>nie odnaleziono strony </h2></>}></Route>
  </Routes>;

  return (
    <ThemeProvider theme={themeSwitch.theme}>

      <Layout top={top} aside={aside}>
        {main}
      </Layout>
    </ThemeProvider>
  );
};

export default App;
