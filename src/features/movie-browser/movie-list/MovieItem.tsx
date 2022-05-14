import { Link, useLocation } from 'react-router-dom';
import { MovieLite } from '../../../services/movies';
import { getThumbUrl } from '../../../services/tmdb';
import { toMovieDetailsPage } from '../routes';
import styles from './MovieItem.module.css';

export interface MovieItemProps {
  movie: MovieLite;
}

export const MovieItem = ({ movie, ...rest }: MovieItemProps) => {
  return (
    <div className={styles.root} {...rest}>
      <img
        alt="movie poster"
        className={styles.avatar}
        src={getThumbUrl(String(movie.poster_path ?? movie.backdrop_path))}
      />
      <Link
        to={{
          pathname: toMovieDetailsPage(movie.id.toString()),
          search: useLocation().search,
        }}
        className={styles.title}
      >
        {movie.title}
      </Link>
      <div className={styles.year}>{movie.release_date}</div>
    </div>
  );
};
