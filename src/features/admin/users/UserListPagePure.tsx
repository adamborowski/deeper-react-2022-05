import { FC } from 'react';
import { PageLayout } from '../../../components/templates/PageLayout';
import { UserListItem } from './UserListItem';

export interface UserListItemData {
  id: number;
  name: string;
  email: string;
}

export interface UserListPagePureProps {
  users: UserListItemData[];
  onUserDelete: (id: number) => void;
}

export const UserListPagePure: FC<UserListPagePureProps> = ({
  users,
  onUserDelete,
  ...rest
}) => (
  <PageLayout title="Chroniona lista użytkowników" {...rest}>
    {users.map((user) => (
      <UserListItem
        key={user.id}
        {...user}
        onDeleteClick={() => onUserDelete(user.id)}
      />
    ))}
  </PageLayout>
);

export const UserListPagePureWrongKey: FC<UserListPagePureProps> = ({
  users,
  onUserDelete,
  ...rest
}) => (
  <PageLayout title="Chroniona lista użytkowników" {...rest}>
    {users.map((user, index) => (
      <UserListItem
        key={`user-${user.id}-${index}`}
        {...user}
        onDeleteClick={() => onUserDelete(user.id)}
      />
    ))}
  </PageLayout>
);
