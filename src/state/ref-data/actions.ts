import { createAction } from '@reduxjs/toolkit';
import {
  LOAD_OCCUPATION_REQUEST,
  LOAD_OCCUPATION_SUCCESS,
  API_FAILURE,
  RefDataState,
} from './types';

export const loadOccupationRequest = createAction(LOAD_OCCUPATION_REQUEST);
export const loadOccupationSuccess = createAction<
  RefDataState['occupationTypes']
>(LOAD_OCCUPATION_SUCCESS);
export const apiFailure = createAction<string>(API_FAILURE);
