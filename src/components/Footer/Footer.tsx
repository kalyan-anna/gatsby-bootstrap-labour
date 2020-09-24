import React from 'react';
import styles from './Footer.module.scss';
import { Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className={`bg-secondary text-white ${styles.footer}`}>
      <div className="container">
        <span>Stay up to date: </span>
        <Nav className="d-inline-flex">
          <Nav.Item>
            <Nav.Link className="text-light" href="https://www.youtube.com/">
              Youtube
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-light" href="https://www.facebook.com/">
              Facebook
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-light" href="https://twitter.com/">
              Twitter
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav className="d-inline-flex float-right">
          <Nav.Item>
            <Nav.Link className="text-light" href="/Contact">
              Contact
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-light" eventKey="About">
              About
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </footer>
  );
};

export default Footer;
