import { useEffect, useState } from 'react';
import { MovieLite, searchMovies } from '../../../services/movies';
import { useMovieSearchParams } from '../../../services/useMovieSearchParams';

export type MoviesState =
  | { type: 'loading' }
  | { type: 'idle'; movies: MovieLite[]; totalPages: number }
  | { type: 'error'; message: string };

export const useMovies = () => {
  const [params, setParams] = useMovieSearchParams();

  const [state, setState] = useState<MoviesState>({ type: 'loading' });

  useEffect(() => {
    setState({ type: 'loading' });
    try {
      searchMovies(params).then((movies) => {
        setState({
          type: 'idle',
          movies: movies.results,
          totalPages: movies.total_pages === 0 ? 1 : movies.total_pages,
        });
      });
    } catch (error) {
      if (error instanceof Error) {
        setState({ type: 'error', message: error.message });
      } else {
        throw error;
      }
    }
  }, [params.query, params.year, params.page]);

  return {
    state,
    setParams,
    nextPage: () => {
      if (state.type === 'idle') {
        if (params.page < state.totalPages) {
          setParams({ ...params, page: params.page + 1 });
        }
      }
    },
    prevPage: () => {
      if (params.page > 1) {
        setParams({ ...params, page: params.page - 1 });
      }
    },
    clearParams: () => setParams({ page: 1, year: undefined, query: '' }),
    params,
  };
};
