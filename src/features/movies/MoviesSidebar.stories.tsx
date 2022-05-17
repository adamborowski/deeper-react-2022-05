import { PageLayout } from '../../common/layouts/PageLayout';
import { MoviesSidebar } from './MoviesSidebar';

export default {};

export const WithinLayout = () => {
  return (
    <PageLayout
      headerContent="some header"
      sidebarContent={<MoviesSidebar />}
      mainContent="some content"
    />
  );
};
