import { FC } from 'react';
import { MoviesState, useMovies } from './useMovies';

export interface MoviesSidebarProps {}

export const MoviesSidebar: FC<MoviesSidebarProps> = ({}) => {
  const { movies } = useMovies();

  return <MoviesSidebarPure movies={movies} />;
};

export const MoviesSidebarPure: FC<{ movies: MoviesState }> = ({ movies }) => (
  <>
    Tutaj będzie lista filmów
    {movies.type === 'loading' && 'loading'}
    {movies.type === 'error' && <div>Error: {movies.message}</div>}
    {movies.type === 'success' &&
      movies.movies.map((movie) => <div>Movie: {movie.title}</div>)}
  </>
);
