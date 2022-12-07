import React from 'react';
import { Outlet } from 'react-router-dom';
import { Aside } from '../aside';
import styles from './index.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      <Aside />
      <section className={styles.section}>
        <Outlet />
      </section>
    </main>
  );
};

export { Main };
