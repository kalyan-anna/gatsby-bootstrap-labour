import React from 'react';
import { Button } from 'react-bootstrap';
import { boolean } from 'yup';

interface StepNavigationProps {
  showNext?: boolean;
  showBack?: boolean;
  showStartAgain?: boolean;
  onBack?: () => void;
  onStartAgain?: () => void;
}

export const StepNavigation: React.FC<StepNavigationProps> = ({
  showNext = true,
  showBack = true,
  showStartAgain = true,
  onBack = () => {},
  onStartAgain = () => {},
}) => {
  return (
    <nav
      className="d-flex justify-content-between mt-5"
      role="navigation"
      aria-label="step"
    >
      <div>
        <Button
          variant="secondary"
          type="button"
          hidden={!showBack}
          onClick={onBack}
        >
          Back
        </Button>
      </div>

      <div>
        <Button
          variant="secondary"
          type="button"
          hidden={!showStartAgain}
          onClick={onStartAgain}
        >
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
