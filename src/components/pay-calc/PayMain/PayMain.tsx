import React, { useEffect } from 'react';
import { OccupationTypeForm } from '../OccupationTypeForm/OccupationTypeForm';
import { useDispatch } from 'react-redux';
import { loadOccupationRequest } from 'state/ref-data';

export const PayMain = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadOccupationRequest());
  }, []);

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
