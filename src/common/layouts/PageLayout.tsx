import { FC, ReactNode } from 'react';
import styles from './PageLayout.module.css';

export interface PageLayoutProps {
  headerContent: ReactNode;
  sidebarContent: ReactNode;
  mainContent: ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = ({
  headerContent,
  sidebarContent,
  mainContent,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>{headerContent}</div>
      <div className={styles.columns}>
        <div className={styles.leftColumn}>{sidebarContent}</div>
        <div className={styles.rightColumn}>{mainContent}</div>
      </div>
    </div>
  );
};
