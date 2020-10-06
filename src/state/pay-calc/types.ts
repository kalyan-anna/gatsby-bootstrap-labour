export const UPDATE_OCCUPATION_TYPE = 'payCalc/UPDATE_OCCUPATION_TYPE';
export const START_AGAIN = 'payCalc/START_AGAIN';
export const UPDATE_CATEGORIES = 'payCalc/UPDATE_CATEGORIES';

export interface Categories {
  trainee: boolean;
  supportedWage: boolean;
  apprentice: boolean;
}

export interface OccupationType {
  occupationType: string;
}

export type PayCalcState = OccupationType & Categories;
