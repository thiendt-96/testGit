import { call, put, takeLatest } from 'redux-saga/effects';

import { DELETE_EXAM } from '../../constant/index';
import {
  deleteExamSuccess,
  deleteExamErrors
} from '../actions/index';
import { deteleExamApi } from '../../apis/index';

function* workDeleteExamSaga(action) {
  try {
    const response = yield call(deteleExamApi, action.id);
    yield put(deleteExamSuccess(response.data));
  } catch (error) {
    yield put(deleteExamErrors(error));
  }
}

function* watchDeleteExamSaga() {
  yield takeLatest(DELETE_EXAM, workDeleteExamSaga);
}

export default watchDeleteExamSaga;