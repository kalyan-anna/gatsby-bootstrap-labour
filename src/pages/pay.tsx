import React from 'react';
import { Container } from 'react-bootstrap';
import { AppLayout } from '../layouts';
import { PayMain } from 'packages/pay-calc';

const PayPage = () => {
  return (
    <AppLayout title="Pay Calc">
      <Container className="mt-5">
        <PayMain />
      </Container>
    </AppLayout>
  );
};

export default PayPage;
