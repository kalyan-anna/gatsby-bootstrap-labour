import { combineReducers } from '@reduxjs/toolkit';
import { refDataReducer } from './ref-data/reducer';
import { payCalcReducer } from './pay-calc/reducer';

const rootReducer = combineReducers({
  refData: refDataReducer,
  payCalc: payCalcReducer,
});

export default rootReducer;
