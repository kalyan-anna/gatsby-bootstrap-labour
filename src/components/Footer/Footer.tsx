import React from 'react';
import styles from './Footer.module.scss';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type SocialMediaProps = {
  items: Array<{
    title: string;
    link: string;
  }>;
};

const SocialMedia: React.FC<SocialMediaProps> = ({ items }) => (
  <Nav className="d-flex flex-column  d-md-inline-flex flex-md-row">
    {items.map((item) => (
      <Nav.Item>
        <Nav.Link
          className="text-light"
          href={item.link}
          target="_blank"
          aria-label="Opens in new window"
        >
          <span className="mr-1">{item.title}</span>
          <FontAwesomeIcon icon="external-link-alt" size="xs" />
        </Nav.Link>
      </Nav.Item>
    ))}
  </Nav>
);

const Footer = () => {
  return (
    <footer
      className={`bg-secondary text-white d-md-flex align-items-center ${styles.footer}`}
    >
      <div className="container pt-3 pt-md-0">
        <strong className="ml-3 ml-md-0">Stay up to date: </strong>
        <SocialMedia
          items={[
            { title: 'Youtube', link: 'https://www.youtube.com/' },
            { title: 'Facebook', link: 'https://www.facebook.com/' },
            { title: 'Twitter', link: 'https://twitter.com/' },
          ]}
        />
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
