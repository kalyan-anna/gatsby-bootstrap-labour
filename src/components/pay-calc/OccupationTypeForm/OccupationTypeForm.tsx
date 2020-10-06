import React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Select, StepNavigation, Spinner } from 'components/ui-components';
import { useSelector, useDispatch } from 'react-redux';
import { refDataSelectors } from 'state/ref-data';
import {
  occupationTypeUpdated,
  OccupationType,
  payCalcSelectors,
} from 'state/pay-calc';

const schema = yup.object().shape({
  occupationType: yup.string().required('This is a required field.'),
});

interface OccupationTypeFormProps {
  onNext(): void;
}

export const OccupationTypeForm: React.FC<OccupationTypeFormProps> = ({
  onNext,
}) => {
  const occupationTypes = useSelector(refDataSelectors.occupationTypes);
  const occupationType = useSelector(payCalcSelectors.occupationType);
  const isLoading = useSelector(refDataSelectors.isLoading);

  const { register, handleSubmit, errors } = useForm<OccupationType>({
    resolver: yupResolver(schema),
    defaultValues: { occupationType },
  });
  const dispatch = useDispatch();

  const onSubmit = (data: OccupationType) => {
    dispatch(occupationTypeUpdated(data.occupationType));
    onNext();
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h2 className="h2 mb-3">What is your occupation?</h2>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Select
          name="occupationType"
          label="Please select the job title from the list that best fits the
            occupation to help us find the awards that apply."
          ref={register({ required: true })}
          options={occupationTypes}
          error={errors.occupationType}
        />
        <StepNavigation showStartAgain={false} showBack={false} />
      </Form>
    </div>
  );
};
