import cx from 'classnames';
import { ReactNode } from 'react';
import styles from './AppHeaderLayout.module.css';

export interface AppHeaderLayoutProps {
  extra?: ReactNode;
  children: ReactNode;
  className?: string;
}

export const AppHeaderLayout = ({
  children,
  extra,
  className,
  ...rest
}: AppHeaderLayoutProps) => (
  <div className={cx(className, styles.root)} {...rest}>
    <div className={styles.title}>{children}</div>
    <div className={styles.extra}>{extra}</div>
  </div>
);
