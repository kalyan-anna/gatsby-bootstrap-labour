import React from 'react';
import Header from '../components/Header/Header';
import styles from './AppLayout.module.scss';
import '../styles/global.scss';

const AppLayout = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.main}>
        <div className="container">{children}</div>
      </main>
    </div>
  );
};

export default AppLayout;
