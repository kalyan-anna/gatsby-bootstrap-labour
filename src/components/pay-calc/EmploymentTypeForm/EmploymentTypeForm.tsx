import React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { StepNavigation, Radio } from 'components/ui-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  payCalcSelectors,
  EmploymentType,
  employmentTypeUpdated,
} from 'state/pay-calc';

const schema = yup.object().shape({
  employmentType: yup.string().required('This is a required field.'),
});

interface EmploymentTypeFormProps {
  onNext(): void;
  onBack(): void;
  onStartAgain(): void;
}

export const EmploymentTypeForm: React.FC<EmploymentTypeFormProps> = ({
  onNext,
  onBack,
  onStartAgain,
}) => {
  const employmentType = useSelector(payCalcSelectors.employmentType);

  const { register, handleSubmit, errors } = useForm<EmploymentType>({
    resolver: yupResolver(schema),
    defaultValues: { employmentType },
  });
  const dispatch = useDispatch();

  const onSubmit = (data: EmploymentType) => {
    dispatch(employmentTypeUpdated(data.employmentType));
    onNext();
  };

  return (
    <div>
      <h2 className="h2 mb-3">Please answer the following:</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Radio
          name="employmentType"
          label="What is your type of employment?"
          error={errors.employmentType}
          ref={register}
          options={[
            {
              label: 'Full-time',
              value: 'Full-time',
            },
            {
              label: 'Part-time',
              value: 'Part-time',
            },
            {
              label: 'Casual',
              value: 'Casual',
            },
          ]}
        />
        <StepNavigation onBack={onBack} onStartAgain={onStartAgain} />
      </Form>
    </div>
  );
};
