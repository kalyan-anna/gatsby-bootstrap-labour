import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Select } from '@ui-components';

const occupations = [
  {
    name: 'Waiter',
    value: 'Waiter',
  },
  {
    name: 'Paramedic',
    value: 'Paramedic',
  },
  {
    name: 'Dentist',
    value: 'Dentist',
  },
  {
    name: 'Nurse',
    value: 'Nurse',
  },
  {
    name: 'Doctor',
    value: 'Doctor',
  },
  {
    name: 'Electrician',
    value: 'Electrician',
  },
  {
    name: 'Software Engineer',
    value: 'Software Engineer',
  },
  {
    name: 'Reporter',
    value: 'Reporter',
  },
  {
    name: 'Construction worker',
    value: 'Construction worker',
  },
  {
    name: 'Photographer',
    value: 'Photographer',
  },
  {
    name: 'Gardener',
    value: 'Gardener',
  },
  {
    name: 'Architect',
    value: 'Architect',
  },
  {
    name: 'Housewife',
    value: 'Housewife',
  },
];

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
  const { register, handleSubmit, errors } = useForm<OccupationTypeInput>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = (data: OccupationTypeInput) =>
    console.log('submitted form data:', data);

  return (
    <div>
      <h2 className="h2">What is your occupation?</h2>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Select
          name="occupationType"
          label="Please select the job title from the list that best fits the
            occupation to help us find the awards that apply."
          ref={register({ required: true })}
          options={occupations}
          error={errors.occupationType}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
