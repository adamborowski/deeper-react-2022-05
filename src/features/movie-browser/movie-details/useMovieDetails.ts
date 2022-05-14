import { useEffect, useState } from 'react';
import { getMovie, Movie } from '../../../services/movies';

export type DetailsState =
  | { type: 'loading' }
  | { type: 'idle'; movie: Movie }
  | { type: 'error'; message: string };

export const useMovieDetails = (id: number | undefined) => {
  const [state, setState] = useState<DetailsState>({ type: 'loading' });

  useEffect(() => {
    if (id === undefined) {
      setState({ type: 'error', message: 'No movie specified' });
    } else {
      setState({ type: 'loading' });
      try {
        getMovie(id).then((movie) => {
          setState({
            type: 'idle',
            movie,
          });
        });
      } catch (error) {
        if (error instanceof Error) {
          setState({ type: 'error', message: error.message });
        } else {
          throw error;
        }
      }
    }
  }, [id]);

  return {
    state,
  };
};
