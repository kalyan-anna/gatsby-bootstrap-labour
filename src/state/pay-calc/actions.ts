import { createAction } from '@reduxjs/toolkit';
import { UPDATE_OCCUPATION_TYPE, START_AGAIN } from './types';

export const updateOccupationType = createAction<string>(
  UPDATE_OCCUPATION_TYPE
);

export const startAgain = createAction(START_AGAIN);
