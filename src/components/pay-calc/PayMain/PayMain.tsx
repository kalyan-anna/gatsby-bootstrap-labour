import React, { useEffect, useState } from 'react';
import { OccupationTypeForm } from '../OccupationTypeForm/OccupationTypeForm';
import { useDispatch } from 'react-redux';
import { loadOccupationRequest } from 'state/ref-data';
import { CategoriesForm } from '../CategoriesForm/CategoriesForm';

export const PayMain = () => {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prev) => ++prev);
  };

  const handleBack = () => {
    setActiveStep((prev) => --prev);
  };

  const handleStartAgain = () => {
    setActiveStep(0);
  };

  const steps = [
    {
      name: 'Occupation',
      component: <OccupationTypeForm onNext={handleNext} />,
    },
    {
      name: 'Categories',
      component: (
        <CategoriesForm
          onNext={handleNext}
          onBack={handleBack}
          onStartAgain={handleStartAgain}
        />
      ),
    },
  ];

  useEffect(() => {
    dispatch(loadOccupationRequest());
  }, []);

  return (
    <section className="container p-3 bg-light">
      <h1 className="mb-3 text-secondary h1">Pay Calculator</h1>
      <p className="text-muted mb-5">
        The Pay Calculator calculates base pay rates, allowances and penalty
        rates (including overtime).
      </p>
      {steps[activeStep].component}
    </section>
  );
};
