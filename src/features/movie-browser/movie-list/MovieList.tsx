import { MovieItem } from './MovieItem';
import styles from './MovieList.module.css';
import { MovieSearch } from './MovieSearchBar';
import { useMovies } from './useMovies';

export const MovieList = () => {
  const { state, params, setParams, clearParams, prevPage, nextPage } =
    useMovies();

  return (
    <div className={styles.root}>
      <MovieSearch
        params={params}
        onApplyClick={setParams}
        totalPages={state.type === 'idle' ? state.totalPages : 1}
        onPrevClick={prevPage}
        onNextClick={nextPage}
      />
      {state.type === 'idle' &&
        (state.movies.length ? (
          <div className={styles.itemsContainer}>
            {state.movies.map((movie) => (
              <MovieItem movie={movie} key={movie.id} />
            ))}
          </div>
        ) : (
          <div className={styles.noResults}>
            Niczego nie znaleziono.{' '}
            <a href="javascript: void 0" onClick={clearParams}>
              Wyczyść filtry
            </a>
          </div>
        ))}
    </div>
  );
};
