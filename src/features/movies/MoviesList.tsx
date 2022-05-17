import { HTMLAttributes } from 'react';
import { MenuItem } from '../../common/atoms/MenuItem';
import styles from './MoviesList.module.css';
import { useMovies } from './useMovies';


export interface MoviesListProps extends HTMLAttributes<HTMLElement> {}

export const MoviesList = (props: MoviesListProps) => {
  const state = useMovies();

  return <>
    {state.type === 'error' && <div>Błąd ładowania listy: {state.message}</div>}
    {state.type === 'loading' && <div>Ładowanie wyników...</div>}
    {state.type === 'success' && state.movies.map((movie, index) => (
      <MenuItem key={index} to={'/movies/' + movie.id}>{movie.title}</MenuItem>
    ))}
  </>
};
