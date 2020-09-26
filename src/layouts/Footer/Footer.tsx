import React from 'react';
import styles from './Footer.module.scss';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';

type SocialMediaProps = {
  items: Array<{
    title: string;
    link: string;
  }>;
};

const SocialMedia: React.FC<SocialMediaProps> = ({ items }) => (
  <Nav className="d-flex flex-column  d-md-inline-flex flex-md-row">
    {items.map((item, index) => (
      <Nav.Item key={index}>
        <Nav.Link
          className="text-light"
          href={item.link}
          target="_blank"
          aria-label="Opens in new window"
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <motion.span className="mr-1">{item.title}</motion.span>
            <FontAwesomeIcon icon="external-link-alt" size="xs" />
          </motion.div>
        </Nav.Link>
      </Nav.Item>
    ))}
  </Nav>
);

export const Footer = () => {
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
            <Nav.Link as={Link} className="text-light" to="/contact">
              Contact
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} className="text-light" to="/about">
              About
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </footer>
  );
};
