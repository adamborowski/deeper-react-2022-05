import cx from 'classnames';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styles from './MenuItem.module.css';

export interface MenuItemProps extends NavLinkProps {}

export const MenuItem = (props: MenuItemProps) => (
  <NavLink
    {...props}
    className={({ isActive }) => cx(styles.root, { [styles.active]: isActive })}
  />
);
