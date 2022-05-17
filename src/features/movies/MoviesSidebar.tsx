import { FC, useEffect, useState } from 'react';
import { MovieLite, searchMovies } from '../../services/movies';

export interface MoviesSidebarProps {}

type MoviesState =
  | {
      type: 'idle';
    }
  | {
      type: 'loading';
    }
  | {
      type: 'success';
      movies: MovieLite[];
    }
  | {
      type: 'error';
      message: string;
    };

export const MoviesSidebar: FC<MoviesSidebarProps> = ({}) => {
  const [moviesState, setMovieState] = useState<MoviesState>({ type: 'idle' });

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      console.log('use effect !!!!');

      try {
        setMovieState({ type: 'loading' });
        const result = await searchMovies(
          {
            query: 'police',
            year: undefined,
            page: 1,
          },
          abortController.signal
        );

        setMovieState({ type: 'success', movies: result.results });
      } catch (e) {
        if (e instanceof DOMException && e.name === 'AbortError') {
          setMovieState({ type: 'idle' });
        } else {
          setMovieState({
            type: 'error',
            message: e instanceof Error ? e.message : String(e),
          });
        }
      }
    })();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      Tutaj będzie lista filmów
      {moviesState.type === 'loading' && 'loading'}
      {moviesState.type === 'error' && <div>Error: {moviesState.message}</div>}
      {moviesState.type === 'success' &&
        moviesState.movies.map((movie) => <div>Movie: {movie.title}</div>)}
    </>
  );
};
