import { useEffect, useState } from 'react';
import { MovieLite, searchMovies } from '../../services/movies';

export type MoviesState =
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

export const useMovies = () => {
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

  return {
    movies: moviesState,
    rename: (movieId: number, newTitle: string) => {
      if (moviesState.type === 'success') {
        setMovieState({
          type: 'success',
          movies: moviesState.movies.map((oldMovie) =>
            oldMovie.id === movieId
              ? { ...oldMovie, title: newTitle }
              : oldMovie
          ),
        });
      } else {
        throw new Error('Cannot update movies when they are not loaded');
      }
    },
  };
};
