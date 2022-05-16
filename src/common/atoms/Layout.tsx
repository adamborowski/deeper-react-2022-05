import styles from './Layout.module.css';
import { ReactElement, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({
  children,
  ...rest
}: LayoutProps): ReactElement => (
  <div
    {...rest}
    className={styles.layout}
  >
    {children}
  </div>
);
