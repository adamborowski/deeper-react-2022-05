import cx from 'classnames';
import { ReactNode } from 'react';
import styles from './ThemeProvider.module.css';

export type ThemeName = 'light'|'dark'

export interface ThemeProviderProps {
  theme: ThemeName;
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
