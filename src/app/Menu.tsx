import React, { FC, ReactElement, ReactNode } from 'react';
import { MenuItem } from '../common/atoms/MenuItem';
import styles from './Menu.module.css';

export interface MenuProps {
  children: ReactNode;
}

export const Menu = ({ children }: MenuProps): ReactElement => {
  return <div className={styles.menuRoot}>{children}</div>;
};
