import React from 'react';
import Header from '../components/Header/Header';
import styles from './AppLayout.module.scss';
import '../styles/global.scss';
import Footer from '../components/Footer/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faExternalLinkAlt);

const AppLayout = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
