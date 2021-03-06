import React, { useEffect, useState } from 'react';
import { OccupationTypeForm } from '../OccupationTypeForm/OccupationTypeForm';
import { useDispatch, useSelector } from 'react-redux';
import { loadOccupationRequest, refDataSelectors } from 'state/ref-data';
import { CategoriesForm } from '../CategoriesForm/CategoriesForm';
import { EmploymentTypeForm } from '../EmploymentTypeForm/EmploymentTypeForm';
import { Summary } from '../Summary/Summary';
import { startAgain } from 'state/pay-calc';
import { Stepper } from 'components/ui-components/Stepper/Stepper';

export const PayCalcMain = () => {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const occupationTypes = useSelector(refDataSelectors.occupationTypes);

  useEffect(() => {
    if (occupationTypes.length === 0) {
      dispatch(loadOccupationRequest());
    }
  }, [occupationTypes.length]);

  const handleNext = () => {
    setActiveStep((prev) => ++prev);
  };

  const handleBack = () => {
    setActiveStep((prev) => --prev);
  };

  const handleStartAgain = () => {
    dispatch(startAgain());
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
    {
      name: 'Employment',
      component: (
        <EmploymentTypeForm
          onNext={handleNext}
          onBack={handleBack}
          onStartAgain={handleStartAgain}
        />
      ),
    },
    {
      name: 'Summary',
      component: <Summary onStartAgain={handleStartAgain} />,
    },
  ];

  return (
    <section className="container p-3 bg-light">
      <h1 className="mb-3 text-secondary h1">Pay Calculator</h1>
      <p className="text-muted mb-5">
        The Pay Calculator calculates base pay rates, allowances and penalty
        rates (including overtime).
      </p>
      <Stepper
        activeStep={activeStep}
        steps={steps.map(({ name }) => ({ name }))}
      />
      {steps[activeStep].component}
    </section>
  );
};
