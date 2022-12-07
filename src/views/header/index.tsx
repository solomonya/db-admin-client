import { Typography } from '@mui/material';
import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Typography className={styles.title} variant="h5">
        Study Load Admin
      </Typography>
    </header>
  );
};

export { Header };
