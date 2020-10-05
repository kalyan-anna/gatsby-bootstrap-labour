import { createReducer } from '@reduxjs/toolkit';
import {
  RefDataState,
  LOAD_OCCUPATION_REQUEST,
  LOAD_OCCUPATION_SUCCESS,
  API_FAILURE,
} from './types';

const defaultValue: RefDataState = {
  occupationTypes: [],
  loadingOccupationTypes: false,
  error: '',
};

export const refDataReducer = createReducer<RefDataState>(defaultValue, {
  [LOAD_OCCUPATION_REQUEST]: (state: RefDataState) => {
    state.loadingOccupationTypes = true;
    state.error = '';
    return state;
  },
  [LOAD_OCCUPATION_SUCCESS]: (state: RefDataState, action) => {
    state.loadingOccupationTypes = false;
    state.error = '';
    state.occupationTypes = action.payload;
    return state;
  },
  [API_FAILURE]: (state: RefDataState, action) => {
    state.loadingOccupationTypes = false;
    state.error = action.payload;
    return state;
  },
});
