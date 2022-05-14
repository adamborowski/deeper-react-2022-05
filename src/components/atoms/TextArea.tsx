import cx from 'classnames';
import { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

export interface TextAreaProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea = ({ className, ...rest }: TextAreaProps) => (
  <textarea className={cx(className, styles.root)} {...rest} />
);
