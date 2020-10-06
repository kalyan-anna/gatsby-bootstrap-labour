import { PayCalcState } from 'state/pay-calc';

const calculatePay = (data: PayCalcState) => {
  return new Promise((resolve) => setTimeout(() => resolve('$25.66'), 3000));
};

export const payCalcService = {
  calculatePay,
};
