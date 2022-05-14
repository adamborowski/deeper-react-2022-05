import { ReactNode } from 'react';
import styles from './AppLayout.module.css';

export interface AppLayoutProps {
  sidebarContent: ReactNode;
  headerContent: ReactNode;
  children: ReactNode;
}

export const AppLayout = ({
  children,
  sidebarContent,
  headerContent,
}: AppLayoutProps) => (
  <div className={styles.root}>
    <div className={styles.header}>{headerContent}</div>
    <div className={styles.columns}>
      <div className={styles.leftColumn}>{sidebarContent}</div>
      <div className={styles.children}>{children}</div>
    </div>
  </div>
);
