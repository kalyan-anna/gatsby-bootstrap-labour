import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AppLayout } from '../layouts';
import { AppThumbnail } from '../packages/ui-components';
import { navigate } from 'gatsby';

const IndexPage = () => {
  const handlePayCalcClick = () => {
    navigate('/pay');
  };

  const handleShiftCalcClick = () => {
    navigate('/shift');
  };

  return (
    <AppLayout title="Home">
      <section className="jumbotron text-center bg-light">
        <div className="container">
          <h1 className="jumbotron-heading">React - TypeScript - Bootstrap</h1>
          <p className="lead text-muted mt-5">
            This is a sample app based on Gatsby, React, Typescript and
            Bootstrap.
          </p>
        </div>
      </section>
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col sm md={6} lg={4}>
            <AppThumbnail
              title="Pay Calculator"
              text="Including allowances and penalty rates."
              onClick={handlePayCalcClick}
            />
          </Col>
          <Col sm md={6} lg={4} className="my-5 mt-sm-0">
            <AppThumbnail
              title="Shift Calculator"
              text="Rates for your shift."
              onClick={handleShiftCalcClick}
            />
          </Col>
        </Row>
      </Container>
    </AppLayout>
  );
};

export default IndexPage;
