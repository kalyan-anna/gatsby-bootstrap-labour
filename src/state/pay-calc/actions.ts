import { createAction } from '@reduxjs/toolkit';
import {
  OCCUPATION_TYPE_UPDATED,
  START_AGAIN,
  Categories,
  CATEGORIES_UPDATED,
  EMPLOYMENT_TYPE_UPDATED,
  EmploymentType,
} from './types';

export const occupationTypeUpdated = createAction<string>(
  OCCUPATION_TYPE_UPDATED
);

export const categoriesUpdated = createAction<Categories>(CATEGORIES_UPDATED);

export const startAgain = createAction(START_AGAIN);

export const employmentTypeUpdated = createAction<
  EmploymentType['employmentType']
>(EMPLOYMENT_TYPE_UPDATED);
