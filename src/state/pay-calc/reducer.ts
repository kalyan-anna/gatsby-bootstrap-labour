import {
  PayCalcState,
  CATEGORIES_UPDATED,
  EMPLOYMENT_TYPE_UPDATED,
} from './types';
import { createReducer } from '@reduxjs/toolkit';
import { OCCUPATION_TYPE_UPDATED } from './types';

const defaultValue: PayCalcState = {
  occupationType: '',
  trainee: false,
  apprentice: false,
  supportedWage: false,
  employmentType: '',
};

export const payCalcReducer = createReducer<PayCalcState>(defaultValue, {
  [OCCUPATION_TYPE_UPDATED]: (state: PayCalcState, action) => {
    state.occupationType = action.payload;
    return state;
  },
  [CATEGORIES_UPDATED]: (state: PayCalcState, action) => {
    return {
      ...state,
      ...action.payload,
    };
  },
  [EMPLOYMENT_TYPE_UPDATED]: (state: PayCalcState, action) => {
    state.employmentType = action.payload;
    return state;
  },
});
