import React from 'react';
import { OccupationTypeForm } from '../OccupationTypeForm/OccupationTypeForm';

export const PayMain = () => {
  return (
    <section className="container">
      <h1 className="mb-3 text-secondary h1">Pay Calculator</h1>
      <p className="text-muted">
        The Pay Calculator calculates base pay rates, allowances and penalty
        rates (including overtime).
      </p>
      <OccupationTypeForm />
    </section>
  );
};
