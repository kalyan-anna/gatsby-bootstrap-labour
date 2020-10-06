import {
  PayCalcState,
  CATEGORIES_UPDATED,
  EMPLOYMENT_TYPE_UPDATED,
  START_AGAIN,
} from './types';
import { createReducer } from '@reduxjs/toolkit';
import { OCCUPATION_TYPE_UPDATED } from './types';

const defaultState: PayCalcState = {
  occupationType: '',
  trainee: false,
  apprentice: false,
  supportedWage: false,
  employmentType: '',
};

export const payCalcReducer = createReducer<PayCalcState>(defaultState, {
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
  [START_AGAIN]: () => defaultState,
});
