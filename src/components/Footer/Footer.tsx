import React from 'react';
import styles from './Footer.module.scss';
import { Nav } from 'react-bootstrap';

const SocialMedia = () => (
  <Nav className="d-flex flex-column  d-md-inline-flex flex-md-row">
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
);

const Footer = () => {
  return (
    <footer
      className={`bg-secondary text-white d-md-flex align-items-center ${styles.footer}`}
    >
      <div className="container pt-3 pt-md-0">
        <strong className="ml-3 ml-md-0">Stay up to date: </strong>
        <SocialMedia />
        <div className="d-md-none border border-dark rounded my-2"></div>
        <Nav className="d-flex flex-column d-md-inline-flex flex-md-row float-md-right">
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
