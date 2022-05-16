import styles from './Menu.module.css';
import { ReactElement, ReactNode } from 'react';

interface MenuProps {
  children: ReactNode;
}

export const Menu = ({
  children,
  ...rest
}: MenuProps): ReactElement => (
  <div
    {...rest}
    className={styles.menu}
  >
    {children}
  </div>
);
