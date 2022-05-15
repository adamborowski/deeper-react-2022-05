import { FC } from 'react';
import { UserListPagePure } from './UserListPagePure';

export const UserListPage: FC = () => (
  <UserListPagePure users={[]} onUserDelete={console.log} />
); // TODO get some data?
