import { FC, useEffect } from 'react';
import { RiDeleteBin4Fill } from 'react-icons/ri';
import { Button } from '../../../components/atoms/Button';
import styles from './UserListItem.module.css';

export interface UserListItemProps {
  name: string;
  email: string;
  onDeleteClick?: () => void;
}

export const UserListItem: FC<UserListItemProps> = ({
  name,
  email,
  onDeleteClick,
}) => {
  useEffect(() => {
    console.log('----> UserListItem mount', { name, email });
    return () => {
      console.log('<---- UserListItem unmount', { name, email });
    };
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.name}>{name}</div>
      <div className={styles.email}>{email}</div>
      <Button className={styles.deleteButton} onClick={onDeleteClick}>
        <RiDeleteBin4Fill />
      </Button>
    </div>
  );
};
