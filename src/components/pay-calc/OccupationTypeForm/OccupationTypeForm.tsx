import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Select, StepNavigation } from 'components/ui-components';
import { useSelector, useDispatch } from 'react-redux';
import { refDataSelectors } from 'state/ref-data';
import { updateOccupationType } from 'state/pay-calc';

const defaultValues: OccupationTypeInput = {
  occupationType: '',
};

interface OccupationTypeInput {
  occupationType: string;
}

const schema = yup.object().shape({
  occupationType: yup.string().required(),
});

export const OccupationTypeForm = () => {
  const occupationTypes = useSelector(refDataSelectors.occupationTypes);
  const { register, handleSubmit, errors } = useForm<OccupationTypeInput>({
    resolver: yupResolver(schema),
    defaultValues,
  });
  const dispatch = useDispatch();

  const onSubmit = (data: OccupationTypeInput) => {
    dispatch(updateOccupationType(data.occupationType));
  };

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
