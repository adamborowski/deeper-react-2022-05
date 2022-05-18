import { HTMLAttributes, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovie, Movie } from '../../services/movies';
import { getPosterUrl } from '../../services/tmdb';
import styles from './MovieDetails.module.css';

type MovieState = {
  type: 'idle';
} | {
  type: 'loading';
} | {
  type: 'success';
  movie: Movie;
} | {
  type: 'error';
  message: string;
}

export interface MovieDetailsProps extends HTMLAttributes<HTMLElement> {}

export const MovieDetails = (props: MovieDetailsProps) => {
  const { movieId } = useParams();

  const [state, setState] = useState<MovieState>({type: 'idle'});

  useEffect(() => {
    (async() => {
      try {
        setState({type: 'loading'});
        const movie = await getMovie(Number(movieId));

        console.log(movie)
        setState({type: 'success', movie});
      } catch(e) {
        if (e instanceof DOMException && e.name === 'AbortError') {
            setState({ type: 'idle' });
        } else {
            setState({ type: 'error', message: e instanceof Error ? e.message : String(e) });
        }
      }
    })();
  }, [movieId])


  return <>
    {state.type === 'error' && <div>Błąd ładowania listy: {state.message}</div>}
    {state.type === 'loading' && <div>Ładowanie wyników...</div>}
    {state.type === 'success' && (
      <>
        <img className={styles.img} src={getPosterUrl(state.movie.poster_path)}/>
        <h1>{state.movie.title}</h1>
        <h3>{state.movie.tagline}</h3>
        <p>
          {state.movie.release_date}<br/>
          <small><b>Rate:</b> {state.movie.vote_average}/10 ({state.movie.vote_count} votes)</small><br/>
          <small><b>Category:</b> {state.movie.genres.map(e => e.name).join(', ')}</small>
        </p>
        <p>{state.movie.overview}</p>
        <p><a href={state.movie.homepage}>{state.movie.homepage}</a></p>
      </>
    )}
  </>
};
