import { FC, useEffect, useState } from 'react';
import { MovieLite, searchMovies } from '../../services/movies';

export interface MoviesSidebarProps {}

export const MoviesSidebar: FC<MoviesSidebarProps> = ({}) => {
  const [movies, setMovies] = useState<MovieLite[]>([]);

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      console.log('use effect !!!!');

      const result = await searchMovies(
        {
          query: 'was asd asdasd asd saonder woman',
          year: undefined,
          page: 1,
        },
        abortController.signal
      );
      setMovies(result.results);
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
