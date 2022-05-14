import { stringify } from 'querystring';

const apiHost = 'https://api.themoviedb.org/3/';

export const getApiUrl = (path: string, params?: object) =>
  `${apiHost}${path}?${stringify({
    ...params,
    api_key: process.env.REACT_APP_TMDB_API_KEY,
  })}`;

export const getThumbUrl = (id?: string) =>
  id && 'https://image.tmdb.org/t/p/w45/' + id;

export const getPosterUrl = (id?: string) =>
  id && 'https://image.tmdb.org/t/p/w500/' + id;

export interface ApiResponse<Data> {
  page: number;
  total_results: number;
  total_pages: number;
  results: Data[];
}
