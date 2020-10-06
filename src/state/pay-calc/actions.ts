import { createAction } from '@reduxjs/toolkit';
import {
  UPDATE_OCCUPATION_TYPE,
  START_AGAIN,
  Categories,
  UPDATE_CATEGORIES,
} from './types';

export const updateOccupationType = createAction<string>(
  UPDATE_OCCUPATION_TYPE
);

export const updateCategories = createAction<Categories>(UPDATE_CATEGORIES);

export const startAgain = createAction(START_AGAIN);
