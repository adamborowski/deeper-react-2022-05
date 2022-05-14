import cx from 'classnames';
import { ReactNode } from 'react';
import styles from './ThemeProvider.module.css';

export interface ThemeProviderProps {
  theme: 'light' | 'dark';
  children: ReactNode;
}

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => (
  <div className={cx(styles.root, styles[theme], styles.defaults)}>
    {children}
  </div>
);
