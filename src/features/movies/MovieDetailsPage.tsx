import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovie, Movie, MovieLite } from '../../services/movies';
import { getPosterUrl } from '../../services/tmdb';
import { Button } from '../../common/atoms/Button';

export interface MovieDetailsPageProps {
  movie: MovieLite | undefined;
  onMovieNameChange?: (newName: string) => void;
}

export const MovieDetailsPage: FC<MovieDetailsPageProps> = ({
  movie,
  onMovieNameChange,
}) => {
  const [title, setTitle] = useState(movie?.title ?? '');

  useEffect(() => {
    setTitle(movie?.title ?? '');
  }, [movie]);

  return (
    <div>
      Details page
      {movie && (
        <div>
          <div>{movie.title}</div>
          <input
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <Button onClick={() => onMovieNameChange?.(title)}>Zapisz</Button>
          <div>{movie.overview}</div>
          <div>{movie.release_date}</div>
          <img src={getPosterUrl(movie.poster_path)} />
        </div>
      )}
    </div>
  );
};
