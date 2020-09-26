import React from 'react';
import Logo from '../../components/Logo/Logo';
import styles from './Header.module.scss';
import { Link } from 'gatsby';

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
