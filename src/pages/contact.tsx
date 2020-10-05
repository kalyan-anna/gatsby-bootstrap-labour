import React from 'react';
import { Container } from 'react-bootstrap';
import { AppLayout } from '../layouts';

const ContactPage = () => (
  <AppLayout title="Contact">
    <Container className="mt-5">
      <h1 className="mb-3 h1">Contact</h1>
      <p>
        <span className="mr-1">Contact me on</span>
        <a href="mailto: kalyan.anna@yahoo.com">kalyan.anna@yahoo.com</a>
      </p>
    </Container>
  </AppLayout>
);

export default ContactPage;
