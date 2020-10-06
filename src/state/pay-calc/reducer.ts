import {
  PayCalcState,
  CATEGORIES_UPDATED,
  EMPLOYMENT_TYPE_UPDATED,
  START_AGAIN,
  CALCULATE_PAY_REQUEST,
  CALCULATE_PAY_SUCCESS,
  API_ERROR,
} from './types';
import { createReducer } from '@reduxjs/toolkit';
import { OCCUPATION_TYPE_UPDATED } from './types';

const defaultState: PayCalcState = {
  occupationType: '',
  trainee: false,
  apprentice: false,
  supportedWage: false,
  employmentType: '',
  hourlyPayRate: '',
  calculating: false,
  error: '',
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
  [CALCULATE_PAY_REQUEST]: (state: PayCalcState) => {
    state.calculating = true;
    state.error = '';
    return state;
  },
  [CALCULATE_PAY_SUCCESS]: (state: PayCalcState, action) => {
    state.calculating = false;
    state.hourlyPayRate = action.payload;
    state.error = '';
    return state;
  },
  [API_ERROR]: (state: PayCalcState, action) => {
    state.error = action.payload;
    state.calculating = false;
    return state;
  },
});
