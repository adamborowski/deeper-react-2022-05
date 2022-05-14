export const toMoviesPage = () => '/movies';
export const toMovieDetailsPage = (movieId = ':movieId') =>
  `${toMoviesPage()}/${movieId}`;
