import { useState } from 'react';
import { MovieLite, searchMovies } from '../../../services/movies';
import { StateQueryParams } from '../../../services/queryParams';
import { ApiResponse } from '../../../services/tmdb';

/**
 * It is difficult to guess the next or prev movie if you don't have all ids fetched locally.
 * We have paginated results and it may be possible that your current page of movies doesn't contain the one you display in details.
 * And please remember that our list is filtered, so the next or prev movie also depends on those filters.
 *
 * What we can do is to assume that movie in details and the movie page are changed together so we will change the page if we nevigate to next out of current page
 */
export const useHeuristicPrevNextDetailsNavigation = (
  params: StateQueryParams,
  movieId: number,
  navigateToMovie: (id: number, params: StateQueryParams) => void
) => {
  const [lastResponse, setLastResponse] = useState<
    ApiResponse<MovieLite> | undefined
  >();

  const searchMoviesWithCache = async (
    params: StateQueryParams,
    invalidateCache: boolean
  ) => {
    if (lastResponse && !invalidateCache) {
      return lastResponse;
    }
    const response = await searchMovies(params);
    setLastResponse(response);
    return response;
  };

  return {
    nextMovie: async () => {
      const response = await searchMoviesWithCache(params, false);
      const movieIndex = response.results.findIndex(
        (movie) => movie.id === movieId
      );

      if (movieIndex + 1 === response.results.length) {
        // current movie is last on page, we have to change the page
        const nextPageResponse = await searchMoviesWithCache(
          {
            ...params,
            page: params.page + 1,
          },
          true
        );
        const firstMovieOnNextPage = nextPageResponse.results[0];
        if (firstMovieOnNextPage) {
          // we found the next movie on next page
          navigateToMovie(firstMovieOnNextPage.id, {
            ...params,
            page: params.page + 1,
          });
        }
      } else if (movieIndex !== -1) {
        const nextMovie = response.results[movieIndex + 1];
        navigateToMovie(nextMovie.id, params);
      } else {
        alert('nie udło się zlokalizować filmu na liście');
      }
    },
    prevMovie: async () => {
      const response = await searchMoviesWithCache(params, false);
      const movieIndex = response.results.findIndex(
        (movie) => movie.id === movieId
      );

      if (movieIndex === 0) {
        // current movie is last on page, we have to change the page
        const prevPageResponse = await searchMoviesWithCache(
          {
            ...params,
            page: params.page - 1,
          },
          true
        );
        const lastMovieOnPrevPage =
          prevPageResponse.results[prevPageResponse.results.length - 1];
        if (lastMovieOnPrevPage) {
          // we found the next movie on next page
          navigateToMovie(lastMovieOnPrevPage.id, {
            ...params,
            page: params.page - 1,
          });
        }
      } else if (movieIndex !== -1) {
        const prevMovie = response.results[movieIndex - 1];
        navigateToMovie(prevMovie.id, params);
      } else {
        alert('nie udało się zlokalizować filmu na liście');
      }
    },
  };
};
