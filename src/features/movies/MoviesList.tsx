import { HTMLAttributes, useEffect, useState } from 'react';
import { MenuItem } from '../../common/atoms/MenuItem';
import { MovieLite, searchMovies } from '../../services/movies';
import styles from './MoviesList.module.css';


export interface IStateIdle {
  type: 'idle';
}

export interface IStateLoading {
  type: 'loading';
}

export interface IStateSuccess {
  type: 'success';
  movies: MovieLite[];
}

export interface IStateError {
  type: 'error';
  message: string;
}

export type State = IStateIdle | IStateLoading | IStateSuccess | IStateError;

export interface MoviesListProps extends HTMLAttributes<HTMLElement> {}

export const MoviesList = (props: MoviesListProps) => {

  const [state, setState] = useState<State>({type: 'idle'});

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      try {
        setState({type: 'loading'});
        const res = await searchMovies({
            query: 'wonder',
            year: undefined,
            page: 1,
          },
          abortController.signal
        );

        setState({type: 'success', movies: res.results});
      } catch(e) {

        if (e instanceof DOMException && e.name === 'AbortError') {
          setState({type: 'idle'});
        } else {
          setState({type: 'error', message: e instanceof Error ? e.message : String(e)});
        }
      }
    })();

    return () => {
      abortController.abort();
    };
  }, []);

  return <>
    {state.type === 'error' && <div>Błąd ładowania listy: {state.message}</div>}
    {state.type === 'loading' && <div>Ładowanie wyników...</div>}
    {state.type === 'success' && state.movies.map((movie, index) => (
      <MenuItem key={index} to={'/movies/' + movie.id}>{movie.title}</MenuItem>
    ))}
  </>
};
