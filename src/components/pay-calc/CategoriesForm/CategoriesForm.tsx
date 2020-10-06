import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { StepNavigation, YesNoRadio } from 'components/ui-components';
import { payCalcSelectors, Categories, updateCategories } from 'state/pay-calc';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  trainee: yup.boolean().required('This is a required field.'),
  supportedWage: yup.boolean().required('This is a required field.'),
  apprentice: yup.boolean().required('This is a required field.'),
});

interface CategoriesFormProps {
  onNext(): void;
  onBack(): void;
  onStartAgain(): void;
}

export const CategoriesForm: React.FC<CategoriesFormProps> = ({
  onNext,
  onBack,
  onStartAgain,
}) => {
  const categories = useSelector(payCalcSelectors.categories);
  const dispatch = useDispatch();

  const { handleSubmit, errors, setValue, control } = useForm<Categories>({
    resolver: yupResolver(schema),
    defaultValues: categories,
  });

  const onSubmit = (data: Categories) => {
    dispatch(updateCategories(data));
    onNext();
  };

  return (
    <div>
      <h2 className="h2 mb-3">Do any of these apply to you?</h2>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <YesNoRadio
          name="trainee"
          label="Are you a trainee?"
          value={categories.trainee}
          onChange={(newValue: boolean) => {
            setValue('trainee', newValue);
          }}
          control={control}
          error={errors.trainee}
        />

        <YesNoRadio
          name="supportedWage"
          label="Are you eligible for a supported wage?"
          value={categories.supportedWage}
          onChange={(newValue: boolean) => {
            setValue('supportedWage', newValue);
          }}
          control={control}
          error={errors.supportedWage}
        />

        <YesNoRadio
          name="apprentice"
          label="Are you an apprentice?"
          value={categories.apprentice}
          onChange={(newValue: boolean) => {
            setValue('apprentice', newValue);
          }}
          control={control}
          error={errors.apprentice}
        />

        <StepNavigation onBack={onBack} onStartAgain={onStartAgain} />
      </Form>
    </div>
  );
};
