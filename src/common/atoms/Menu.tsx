import styles from './Menu.module.css';
import { ReactNode } from 'react';

interface MenuProps {
  children: ReactNode;
}

export const Menu = ({
  children,
  ...rest
}: MenuProps) => (
  <div
    {...rest}
    className={styles.menu}
  >
    {children}
  </div>
);
