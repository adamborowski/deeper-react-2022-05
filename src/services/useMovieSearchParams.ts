import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { convertQuery, StateQueryParams } from './queryParams';

export const useMovieSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams({});

  const state = useMemo(
    () =>
      convertQuery.fromUrlToState(Object.fromEntries(searchParams.entries())),
    [searchParams]
  );

  const setState = (params: StateQueryParams) => {
    setSearchParams(convertQuery.fromStateToUrl(params) as URLSearchParams);
  };

  return [state, setState] as const;
};
