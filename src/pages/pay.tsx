import React from 'react';
import { Container } from 'react-bootstrap';
import { AppLayout } from '../layouts';
import { PayCalcMain } from 'components/pay-calc';

const PayPage = () => {
  return (
    <AppLayout title="Pay Calc">
      <Container className="mt-5">
        <PayCalcMain />
      </Container>
    </AppLayout>
  );
};

export default PayPage;
