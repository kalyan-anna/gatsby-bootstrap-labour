import { RootState } from 'state/store';
import { PayCalcState } from './types';
import { createSelector } from 'reselect';

const getPayCalcState = (state: RootState) => state.payCalc as PayCalcState;

const occupationType = createSelector(
  getPayCalcState,
  ({ occupationType }) => occupationType
);

const categories = createSelector(
  getPayCalcState,
  ({ apprentice, supportedWage, trainee }) => ({
    apprentice,
    supportedWage,
    trainee,
  })
);

const employmentType = createSelector(
  getPayCalcState,
  ({ employmentType }) => employmentType
);

export const payCalcSelectors = {
  occupationType,
  categories,
  employmentType,
};
