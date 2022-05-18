import { MovieDetailsPage } from './MovieDetailsPage';

export default {};
export const Default = () => {
  return (
    <MovieDetailsPage
      movie={{
        id: 0,
        release_date: '2022',
        overview: 'overview',
        poster_path: '/pBxGgWSR0CMaCVMA2kQS5MWU1z3.jpg',
        title: 'Title',
        backdrop_path: '/pBxGgWSR0CMaCVMA2kQS5MWU1z3.jpg',
        original_title: 'original title',
        vote_average: 234,
        vote_count: 234,
        popularity: 234,
      }}
      onMovieNameChange={alert}
    />
  );
};
