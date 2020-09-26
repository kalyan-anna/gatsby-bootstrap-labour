import React from 'react';
import * as styles from './AppLayout.module.scss';
import '../styles/global.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { SEO } from '../SEO/SEO';

library.add(fab, faExternalLinkAlt);

type AppLayoutProps = {
  title: string;
};

export const AppLayout: React.FC<AppLayoutProps> = ({ title, children }) => {
  return (
    <div className={styles.root}>
      <SEO title={title} />
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
