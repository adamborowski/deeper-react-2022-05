import { FC, ReactNode } from 'react';
import styles from './PageLayout.module.css';

export interface PageLayoutProps {
  title: ReactNode;
  children?: ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = ({
  title,
  children,
  ...rest
}) => (
  <div className={styles.root} {...rest}>
    <div className={styles.title}>{title}</div>
    <div className={styles.content}>{children}</div>
  </div>
);
