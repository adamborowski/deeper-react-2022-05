import { FC, useEffect, useState } from 'react';
import { MovieLite, searchMovies } from '../../services/movies';

export interface MoviesSidebarProps {}

export const MoviesSidebar: FC<MoviesSidebarProps> = ({}) => {
  const [movies, setMovies] = useState<MovieLite[]>([]);

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      console.log('use effect !!!!');

      try {
        const result = await searchMovies(
          {
            query: 'police',
            year: undefined,
            page: 1,
          },
          abortController.signal
        );

        setMovies(result.results);
      } catch (e) {
        // TODO how to identify that this error is caused by promise rejection?
        // if (!(e instanceof PromiseRejectionEvent)) {
        //   // throw e;
        // }
      }
    })();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      Tutaj będzie lista filmów
      {movies.length === 0 ? 'loading...' : <>Filmy: {movies.length}</>}
    </>
  );
};
