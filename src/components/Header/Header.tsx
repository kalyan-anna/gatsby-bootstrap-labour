import React from 'react';
import Logo from '../Logo/Logo';
import styles from './Header.module.scss';

const Header = () => (
  <header className="bg-primary shadow" style={{ height: '70px' }}>
    <div className="container">
      <a href="/" className="navbar-brand d-flex align-items-center">
        <Logo />
        <strong className={`text-white font-weight-bold pl-3 ${styles.title}`}>
          Labour Commission App
        </strong>
      </a>
    </div>
  </header>
);

export default Header;
