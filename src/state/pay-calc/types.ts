export const OCCUPATION_TYPE_UPDATED = 'payCalc/OCCUPATION_TYPE_UPDATED';
export const START_AGAIN = 'payCalc/START_AGAIN';
export const CATEGORIES_UPDATED = 'payCalc/CATEGORIES_UPDATED';
export const EMPLOYMENT_TYPE_UPDATED = 'payCalc/EMPLOYMENT_TYPE_UPDATED';

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

export type PayCalcState = OccupationType & Categories & EmploymentType;
