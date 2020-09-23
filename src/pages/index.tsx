import React from 'react';
import AppLayout from '../layouts/AppLayout';
import SEO from '../components/SEO/SEO';
import { Container, Row, Col, Card } from 'react-bootstrap';

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
    <Container>
      <Row>
        <Col md={6} lg={4}>
          <Card
            style={{ cursor: 'pointer' }}
            className="text-center shadow rounded bg-dark text-white"
          >
            <Card.Body>
              <Card.Title>Pay Calculator</Card.Title>
              <Card.Text className="text-muted">
                Including allowances and penalty rates.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </AppLayout>
);

export default IndexPage;
