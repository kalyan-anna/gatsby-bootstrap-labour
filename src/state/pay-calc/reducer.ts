import { PayCalcState } from './types';
import { createReducer } from '@reduxjs/toolkit';
import { UPDATE_OCCUPATION_TYPE } from './types';

const defaultValue: PayCalcState = {
  occupationType: '',
};

export const payCalcReducer = createReducer<PayCalcState>(defaultValue, {
  [UPDATE_OCCUPATION_TYPE]: (state: PayCalcState, action) => {
    state.occupationType = action.payload;
    return state;
  },
});
