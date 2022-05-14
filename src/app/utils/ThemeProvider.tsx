import cx from 'classnames';
import { ReactNode } from 'react';
import styles from './ThemeProvider.module.css';

export interface ThemeProviderProps {
  theme: 'light' | 'dark';
  children: ReactNode;
  className?: string;
}

export const ThemeProvider = ({
  theme,
  className,
  children,
  ...rest
}: ThemeProviderProps) => (
  <div
    className={cx(className, styles.root, styles[theme], styles.defaults)}
    {...rest}
  >
    {children}
  </div>
);
