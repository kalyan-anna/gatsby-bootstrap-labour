import { combineReducers } from '@reduxjs/toolkit';
import { refDataReducer } from './ref-data/reducer';

const rootReducer = combineReducers({
  refData: refDataReducer,
});

export default rootReducer;
