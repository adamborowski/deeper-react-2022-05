import styles from './UserInfo.module.css';

export interface UserInfoProps {
  email: string | null;
}

export const UserInfo = ({ email }: UserInfoProps) => (
  <div className={styles.root}>
    <span>Zalogowany</span>
    <strong>{email ?? 'brak email'}</strong>
  </div>
);
