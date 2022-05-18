import { FC } from 'react';
import { MoviesState, useMovies } from './useMovies';
import { MenuItem } from '../../common/atoms/MenuItem';

export interface MoviesSidebarProps {
  movies: MoviesState;
}

export const MoviesSidebar: FC<MoviesSidebarProps> = ({ movies }) => {
  return <MoviesSidebarPure movies={movies} />; // todo can be removed
};

export const MoviesSidebarPure: FC<{ movies: MoviesState }> = ({ movies }) => (
  <>
    Tutaj będzie lista filmów
    {movies.type === 'loading' && 'loading'}
    {movies.type === 'error' && <div>Error: {movies.message}</div>}
    {movies.type === 'success' &&
      movies.movies.map((movie) => (
        <MenuItem key={movie.id} to={`/movies/${movie.id}`}>
          Movie: {movie.title}
        </MenuItem>
      ))}
  </>
);
