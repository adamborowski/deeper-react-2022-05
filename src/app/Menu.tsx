import React, { FC, ReactElement, ReactNode } from 'react';
import { MenuItem } from '../common/atoms/MenuItem';
import styles from '../app/Menu.module.css';

export interface MenuProps {
  children?: ReactNode;
}

const nav = [
  {
    name: 'Sport',
    url: '/sport',
  },
  {
    name: 'Wiadomości',
    url: '/wiadomosci',
  },
  {
    name: 'Filmy',
    url: '/filmy',
  },
  {
    name: 'Muzyka',
    url: '/muzyka',
  },
];

export const Menu = (props: MenuProps): ReactElement => {
  const navEl = nav.map((el) => (
    <MenuItem to={el.url} key={el.url}>
      {el.name}
    </MenuItem>
  ));

  return (
    <div>
      <div className={styles.menuRoot}>{navEl}</div>
    </div>
  );
};
