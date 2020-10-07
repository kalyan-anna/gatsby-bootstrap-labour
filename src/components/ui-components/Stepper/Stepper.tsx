import React from 'react';
import styles from './Stepper.module.scss';
import classNames from 'classnames';

enum Status {
  FINISHED,
  IN_PROGRESS,
  WAITING,
}

interface StepperProps {
  steps: { name: string }[];
  activeStep: number;
}

interface StepProps {
  name: string;
  status: Status;
  isLast: boolean;
}

const Step: React.FC<StepProps> = ({ name, status, isLast }) => {
  return (
    <div
      style={{ flexGrow: 1 }}
      className="d-flex flex-column flex-md-row align-items-start align-items-md-center"
    >
      <div className="d-flex flex-row align-items-center">
        <div
          className={classNames(styles.dot, {
            ['bg-secondary']: status === Status.WAITING,
            ['bg-primary']:
              status === Status.IN_PROGRESS || status === Status.FINISHED,
          })}
        ></div>
        <span
          className={classNames(styles.title, {
            ['text-muted']: status === Status.WAITING,
            ['text-primary']:
              status === Status.IN_PROGRESS || status === Status.FINISHED,
          })}
        >
          {name}
        </span>
      </div>
      {!isLast && (
        <div
          className={classNames(styles.divider, {
            ['text-muted']:
              status === Status.WAITING || status === Status.IN_PROGRESS,
            ['text-primary']: status === Status.FINISHED,
          })}
        ></div>
      )}
    </div>
  );
};

export const Stepper: React.FC<StepperProps> = ({ steps, activeStep }) => {
  const getStatus = (index: number) => {
    if (index === activeStep) {
      return Status.IN_PROGRESS;
    }
    if (index < activeStep) {
      return Status.FINISHED;
    }
    return Status.WAITING;
  };

  return (
    <div className="d-flex flex-column flex-md-row mb-5">
      {steps.map((step, index) => (
        <Step
          name={step.name}
          status={getStatus(index)}
          isLast={index === steps.length - 1}
          key={step.name}
        />
      ))}
    </div>
  );
};
