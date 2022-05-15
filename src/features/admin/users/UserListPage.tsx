import { FC } from 'react';
import { UserListPagePure } from './UserListPagePure';

export const UserListPage: FC = () => (
  <UserListPagePure
    users={[
      { id: 3, name: 'Patryk Który', email: 'pjak@wp.pl' },
      { id: 3, name: 'Anna Okoń', email: 'ako@wp.pl' },
      { id: 3, name: 'Arnold Czarnogórski', email: 'schwarc@arnold.com' },
      { id: 3, name: 'Wanda Kopcowska', email: 'kopiec123@gmail.com' },
      { id: 3, name: 'Lech Koldowski', email: 'lc@onet.pl' },
      { id: 3, name: 'Adam Dużysz', email: 'adad83@gmail.com' },
      { id: 3, name: 'Cyprian Urwis', email: 'cypur@gmail.com' },
      { id: 3, name: 'Patryk Zakopiański', email: 'patzak@um.kra.com' },
      { id: 3, name: 'Antoni Kobielański', email: 'antkob@um.kra.com' },
    ]}
    onUserDelete={console.log}
  />
); // TODO get some data?
