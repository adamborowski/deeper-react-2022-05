import cx from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ className, ...rest }: ButtonProps) => (
  <button className={cx(className, styles.root)} {...rest} />
);
