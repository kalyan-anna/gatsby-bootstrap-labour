import { takeLatest, put, call, select } from 'redux-saga/effects';
import { CALCULATE_PAY_REQUEST } from './types';
import { payCalcService } from 'services';
import { calculatePaySuccess } from './actions';
import { payCalcSelectors } from './selectors';

function* calcPaySaga() {
  const inputData = yield select(payCalcSelectors.payInputs);
  const data = yield call(payCalcService.calculatePay, inputData);
  yield put(calculatePaySuccess(data));
}

export const payCalcSaga = [takeLatest(CALCULATE_PAY_REQUEST, calcPaySaga)];
