import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';
import { ShowList } from '../../components';
import { links } from './data';
import styles from './index.module.css';

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <ShowList list={links}>
        {({ title, path }) => (
          <RouterLink to={path}>
            <MUILink>{title}</MUILink>
          </RouterLink>
        )}
      </ShowList>
    </aside>
  );
};

export { Aside };
