import { call, put, takeLatest } from 'redux-saga/effects';

import { ADD_EXAM } from '../../constant/index';
import {
  addExamSuccess,
  addExamErrors
} from '../actions/index';
import { addExamApi } from '../../apis/index';

function* workAddExamSaga(action) {
  try {
    const response = yield call(addExamApi, action.data);
    yield put(addExamSuccess(response.data));
  } catch (error) {
    yield put(addExamErrors(error));
  }
}

function* watchAddExamSaga() {
  yield takeLatest(ADD_EXAM, workAddExamSaga);
}

export default watchAddExamSaga;
