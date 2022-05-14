import cx from 'classnames';
import { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className, ...rest }: InputProps) => (
  <input className={cx(className, styles.root)} {...rest} />
);
