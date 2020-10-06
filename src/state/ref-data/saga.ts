import { takeLatest, put, call } from 'redux-saga/effects';
import { LOAD_OCCUPATION_REQUEST } from './types';
import { loadOccupationSuccess } from './actions';
import { refDataService } from 'services';

function* loadOccupationSaga() {
  const data = yield call(refDataService.getOccupationTypes);
  yield put(loadOccupationSuccess(data));
}

export const refDataSaga = [
  takeLatest(LOAD_OCCUPATION_REQUEST, loadOccupationSaga),
];
