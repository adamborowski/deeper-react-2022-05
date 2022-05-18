import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovie, Movie } from '../../services/movies';
import { getPosterUrl } from '../../services/tmdb';

export interface MovieDetailsPageProps {}

type MovieState =
  | {
      type: 'idle';
    }
  | {
      type: 'loading';
    }
  | {
      type: 'success';
      movie: Movie;
    }
  | {
      type: 'error';
      message: string;
    };

export const MovieDetailsPage: FC<MovieDetailsPageProps> = ({}) => {
  const { movieId } = useParams();

  const [movieState, setMovieState] = useState<MovieState>({ type: 'idle' });

  useEffect(() => {
    setMovieState({ type: 'loading' });
    getMovie(Number(movieId))
      .then((movie) => {
        setMovieState({ type: 'success', movie });
      })
      .catch((e) => {
        setMovieState({
          type: 'error',
          message: e instanceof Error ? e.message : String(e),
        });
      });
  }, [movieId]);

  return (
    <div>
      Details page
      {movieState.type === 'loading' && 'loading...'}
      {movieState.type === 'success' && (
        <div>
          <div>{movieState.movie.title}</div>
          <div>{movieState.movie.tagline}</div>
          <div>
            {movieState.movie.production_countries
              .map((e) => e.name)
              .join(', ')}
          </div>
          <img src={getPosterUrl(movieState.movie.poster_path)} />
        </div>
      )}
    </div>
  );
};
