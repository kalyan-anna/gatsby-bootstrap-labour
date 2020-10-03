import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'gatsby';
import { Logo } from '@ui-components';

export const Header = () => (
  <header className="bg-primary shadow" style={{ height: '70px' }}>
    <div className="container">
      <Link to="/" className="navbar-brand d-flex align-items-center">
        <Logo />
        <strong className={`text-white font-weight-bold pl-3 ${styles.title}`}>
          Labour Commission App
        </strong>
      </Link>
    </div>
  </header>
);
