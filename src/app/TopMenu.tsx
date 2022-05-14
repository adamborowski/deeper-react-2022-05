import { FC, ReactNode } from 'react';
import styles from './TopMenu.module.css';

export interface TopMenuProps {
  children: ReactNode;
}

export const TopMenu: FC<TopMenuProps> = ({ children, ...rest }) => (
  <div className={styles.root} {...rest}>
    {children}
  </div>
);
