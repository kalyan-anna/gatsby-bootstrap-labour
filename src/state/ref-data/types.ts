export const LOAD_OCCUPATION_REQUEST = 'ref/LOAD_OCCUPATION_REQUEST';
export const LOAD_OCCUPATION_SUCCESS = 'ref/LOAD_OCCUPATION_SUCCESS';
export const API_FAILURE = 'ref/API_FAILURE';

export interface RefDataState {
  error: string;
  loadingOccupationTypes: boolean;
  occupationTypes: {
    name: string;
    value: string;
  }[];
}
