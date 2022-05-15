import {
  RiArrowGoBackFill,
  RiArrowLeftFill,
  RiArrowRightFill,
} from 'react-icons/ri';
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { Button } from '../../../common/atoms/Button';
import { convertQuery } from '../../../services/queryParams';
import { getPosterUrl } from '../../../services/tmdb';
import { useMovieSearchParams } from '../../../services/useMovieSearchParams';
import { toMovieDetailsPage, toMoviesPage } from '../routes';
import styles from './MovieDetails.module.css';
import { useHeuristicPrevNextDetailsNavigation } from './useHeuristicPrevNextDetailsNavigation';
import { useMovieDetails } from './useMovieDetails';

export const MovieDetails = () => {
  const movieId = Number(useParams().movieId);
  const navigate = useNavigate();
  const { search } = useLocation();

  const { state } = useMovieDetails(movieId);

  const [params] = useMovieSearchParams();

  const heuristic = useHeuristicPrevNextDetailsNavigation(
    params,
    movieId ?? '',
    (movie, params) =>
      navigate({
        search: createSearchParams(
          convertQuery.fromStateToUrl(params) as URLSearchParams
        ).toString(),
        pathname: toMovieDetailsPage(movie.toString()),
      })
  );

  return (
    <div className={styles.root}>
      {state.type === 'error' && <>Błąd: {state.message}</>}
      {state.type === 'idle' && (
        <div className={styles.columns}>
          <img
            alt="poster"
            className={styles.poster}
            src={getPosterUrl(state.movie.poster_path)}
          />
          <div className={styles.grow}>
            <div className={styles.toolbar}>
              <Button
                type="button"
                onClick={() => navigate({ search, pathname: toMoviesPage() })}
              >
                <RiArrowGoBackFill />
              </Button>
              <Button type="button" onClick={heuristic.prevMovie}>
                <RiArrowLeftFill />
              </Button>
              <Button type="button" onClick={heuristic.nextMovie}>
                <RiArrowRightFill />
              </Button>
            </div>
            <h1>{state.movie.title}</h1>
            <em>{state.movie.tagline}</em>
            <p>{state.movie.overview}</p>
            <p>Wydanie: {state.movie.release_date}</p>
          </div>
        </div>
      )}
    </div>
  );
};
