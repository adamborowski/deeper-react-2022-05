import styles from './Logo.module.css';
import logo from './logo.png';

export const Logo = () => (
  <div className={styles.root} style={{ backgroundImage: `url(${logo})` }} />
);
