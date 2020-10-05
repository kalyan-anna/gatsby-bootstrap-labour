import { createSelector } from 'reselect';
import { RootState } from 'state/store';
import { RefDataState } from './types';

const getRefDataState = (state: RootState) => state.refData as RefDataState;

const isLoading = createSelector(
  getRefDataState,
  ({ loadingOccupationTypes }) => loadingOccupationTypes
);

const occupationTypes = createSelector(
  getRefDataState,
  ({ occupationTypes }) => occupationTypes
);

export const refDataSelectors = {
  isLoading,
  occupationTypes,
};
