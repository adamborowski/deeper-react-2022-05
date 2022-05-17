import styles from './Layout.module.css';
import { ReactElement, ReactNode } from 'react';

interface LayoutProps {
  top: ReactNode;
  aside: ReactNode;
  children: ReactNode;
}

export const Layout = ({
  top,
  aside,
  children,
  ...rest
}: LayoutProps): ReactElement => (
  <div
    {...rest}
    className={styles.layout}
  >
    <div className={styles.top}>
      {top}
    </div>

    <div className={styles.aside}>
      {aside}
    </div>

    <div className={styles.main}>
      {children}
    </div>
  </div>
);
