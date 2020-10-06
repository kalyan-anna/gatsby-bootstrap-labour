export const OCCUPATION_TYPE_UPDATED = 'payCalc/OCCUPATION_TYPE_UPDATED';
export const START_AGAIN = 'payCalc/START_AGAIN';
export const CATEGORIES_UPDATED = 'payCalc/CATEGORIES_UPDATED';
export const EMPLOYMENT_TYPE_UPDATED = 'payCalc/EMPLOYMENT_TYPE_UPDATED';
export const CALCULATE_PAY_REQUEST = 'payCalc/CALCULATE_PAY_REQUEST';
export const CALCULATE_PAY_SUCCESS = 'payCalc/CALCULATE_PAY_SUCCESS';
export const API_ERROR = 'payCalc/API_ERROR';

export interface Categories {
  trainee: boolean;
  supportedWage: boolean;
  apprentice: boolean;
}

export interface OccupationType {
  occupationType: string;
}

export interface EmploymentType {
  employmentType: 'Full-time' | 'Part-time' | 'Casual' | '';
}

export type PayCalcState = {
  hourlyPayRate: string;
  calculating: boolean;
  error: string;
} & OccupationType &
  Categories &
  EmploymentType;
