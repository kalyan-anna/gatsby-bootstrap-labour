import { PayCalcState, UPDATE_CATEGORIES } from './types';
import { createReducer } from '@reduxjs/toolkit';
import { UPDATE_OCCUPATION_TYPE } from './types';

const defaultValue: PayCalcState = {
  occupationType: '',
  trainee: false,
  apprentice: false,
  supportedWage: false,
};

export const payCalcReducer = createReducer<PayCalcState>(defaultValue, {
  [UPDATE_OCCUPATION_TYPE]: (state: PayCalcState, action) => {
    state.occupationType = action.payload;
    return state;
  },
  [UPDATE_CATEGORIES]: (state: PayCalcState, action) => {
    return {
      ...state,
      ...action.payload,
    };
  },
});
