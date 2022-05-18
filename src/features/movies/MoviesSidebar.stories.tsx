import { PageLayout } from '../../common/layouts/PageLayout';
import { MoviesSidebar } from './MoviesSidebar';
import { useMovies } from './useMovies';

export default {};

export const WithinLayout = () => {
  const { movies } = useMovies();
  return (
    <PageLayout
      headerContent="some header"
      sidebarContent={<MoviesSidebar movies={movies} />}
      mainContent="some content"
    />
  );
};
