import React from 'react';
import AppLayout from '../layouts/AppLayout';
import SEO from '../components/SEO/SEO';
import CalcThumbnail from '../components/CalcThumbnail/CalcThumbnail';
import { Container, Row, Col } from 'react-bootstrap';

const IndexPage = () => (
  <AppLayout>
    <SEO title="Home" />
    <section className="jumbotron text-center bg-light">
      <div className="container">
        <h1 className="jumbotron-heading">React - TypeScript - Bootstrap</h1>
        <p className="lead text-muted mt-5">
          This is a sample app based on Gatsby, React, Typescript and Bootstrap.
        </p>
      </div>
    </section>
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col sm md={6} lg={4}>
          <CalcThumbnail
            title="Pay Calculator"
            text="Including allowances and penalty rates."
          />
        </Col>
        <Col sm md={6} lg={4} className="mt-3 mt-sm-0">
          <CalcThumbnail
            title="Shift Calculator"
            text="Rates for your shift."
          />
        </Col>
      </Row>
    </Container>
  </AppLayout>
);

export default IndexPage;
