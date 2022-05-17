import { StateQueryParams } from './queryParams';
import { ApiResponse, getApiUrl } from './tmdb';

export interface MovieLite {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  popularity: number;
  vote_count: number;
  vote_average: number;
}

export type ProductionCountries = { name: string }[];
export type Genres = { id: number; name: string }[];

export interface Movie extends MovieLite {
  tagline?: string;
  homepage?: string;
  production_countries: ProductionCountries;
  genres: Genres;
}

export const searchMovies = ({
  query,
  year,
  page,
}: StateQueryParams, signal: AbortSignal): Promise<ApiResponse<MovieLite>> =>
  fetch(
    getApiUrl(query.trim() === '' ? 'movie/popular' : 'search/movie', {
      page: page.toString(),
      query,
      primary_release_year: year
    }), { signal }
  ).then((response) => response.json());

export const getMovie = (id: number): Promise<Movie> =>
  fetch(getApiUrl(`movie/${id}`, {})).then((response) => response.json());
