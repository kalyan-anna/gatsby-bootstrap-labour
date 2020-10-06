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

const hourlyPayRate = createSelector(
  getPayCalcState,
  ({ hourlyPayRate }) => hourlyPayRate
);

const isCalculating = createSelector(
  getPayCalcState,
  ({ calculating }) => calculating
);

const payInputs = createSelector(
  getPayCalcState,
  ({ occupationType, trainee, apprentice, supportedWage, employmentType }) => ({
    occupationType,
    trainee,
    apprentice,
    supportedWage,
    employmentType,
  })
);

export const payCalcSelectors = {
  occupationType,
  categories,
  employmentType,
  hourlyPayRate,
  isCalculating,
  payInputs,
};
