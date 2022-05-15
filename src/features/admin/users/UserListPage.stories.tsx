import React, { useState } from 'react';
import {
  UserListItemData,
  UserListPagePure,
  UserListPagePureWrongKey,
} from './UserListPagePure';

export default {};

const createInitialUsers = () =>
  new Array(6).fill(0).map((element, index) => ({
    id: index,
    name: `Użytkownik ${index}`,
    email: `email${index}@mail.com`,
  }));

export const ManyUsers = () => {
  const [users, setUsers] = useState<UserListItemData[]>(createInitialUsers);

  const handleDelete = (id: number) => {
    setUsers((prevState) => prevState.filter((user) => user.id !== id));
  };

  return <UserListPagePure users={users} onUserDelete={handleDelete} />;
};

export const ManyUsersWongKey = () => {
  const [users, setUsers] = useState<UserListItemData[]>(createInitialUsers);

  const handleDelete = (id: number) => {
    setUsers((prevState) => prevState.filter((user) => user.id !== id));
  };

  return <UserListPagePureWrongKey users={users} onUserDelete={handleDelete} />;
};
