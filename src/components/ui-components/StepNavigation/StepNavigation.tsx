import React from 'react';
import { Button } from 'react-bootstrap';
import { boolean } from 'yup';

interface StepNavigationProps {
  showNext?: boolean;
  showBack?: boolean;
  showStartAgain?: boolean;
}

export const StepNavigation: React.FC<StepNavigationProps> = ({
  showNext = true,
  showBack = true,
  showStartAgain = true,
}) => {
  return (
    <nav
      className="d-flex justify-content-between mt-5"
      role="navigation"
      aria-label="step"
    >
      <div>
        <Button variant="secondary" type="button" hidden={!showBack}>
          Back
        </Button>
      </div>

      <div>
        <Button variant="secondary" type="button" hidden={!showStartAgain}>
          Start again
        </Button>
      </div>

      <div>
        <Button variant="primary" type="submit" hidden={!showNext}>
          Next
        </Button>
      </div>
    </nav>
  );
};
