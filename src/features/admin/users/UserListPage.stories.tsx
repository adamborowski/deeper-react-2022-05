import React, { useState } from 'react';
import { Button } from '../../../common/atoms/Button';
import {
  Operation,
  useOptimisticApi,
  useOptimisticView,
} from '../../../common/state/useOptimisticView';
import { timeout } from '../../../common/timeout';
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

export const OptimisticUpdate = () => {
  const [users, setUsers] = useState<UserListItemData[]>(createInitialUsers);
  const [operations, setOperations] = useState<Operation<UserListItemData>[]>(
    []
  );

  const view = useOptimisticView({ entities: users, operations });

  const { execute } = useOptimisticApi(
    users,
    setUsers,
    operations,
    setOperations
  );

  const handleDelete = async (id: number) => {
    const task = execute({ type: 'delete', id });
    await timeout();
    task.fail();
  };

  const complexScenario = async () => {
    const change2 = execute({
      type: 'edit',
      id: 2,
      newEntity: { id: 2, name: '2-changed', email: 'changed2@gmail.com' },
    });
    console.info('zmieniam 2');

    await timeout(2000);

    const change3 = execute({
      type: 'edit',
      id: 3,
      newEntity: { id: 3, name: '3-changed', email: 'changed3@gmail.com' },
    });
    console.info('zmieniam 3');

    await timeout(2000);
    change3.fail();
    console.info('ups, wycofaj zmiane 3');

    await timeout(2000);
    const remove2 = execute({ type: 'delete', id: 2 });
    console.info('usuwam 2');

    await timeout(2000);
    remove2.fail();
    console.info('ups, nie moge usunac 2');
    await timeout(2000);
    change2.complete();
    console.info('udalo sie zmienic 2');
  };

  return (
    <>
      <p>
        Złożony scenariusz, gdzie zmieniano element, potem go usuwano, usuwanie
        jednak się nie powiodło, ale aktualizacja tego elementu wciąż trwa i
        koniec końców się powiodła.
      </p>
      <Button onClick={complexScenario}>Play complex scenario</Button>
      <p>
        Dla dodania pikanterii można usuwać w trakcie pojedyncze elementy,
        których usunięcie skutkuje niepowodzeniem (z opóźnieniem).
      </p>
      <UserListPagePure users={view} onUserDelete={handleDelete} />
    </>
  );
};
