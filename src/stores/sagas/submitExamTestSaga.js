import { call, put, takeLatest } from 'redux-saga/effects';

import { SUBMIT_EXAM_TEST } from '../../constant/index';
import {
  submitExamTestSuccess,
  submitExamTestErrors
} from '../actions/index';
import { submitExamTestApi } from '../../apis/index';

function* workSubmitExamTestSaga(action) {
  try {
    const response = yield call(submitExamTestApi, action.id, action.data);
    yield put(submitExamTestSuccess(response.data));
  } catch (errors) {
    yield put(submitExamTestErrors(errors));
  }
}

function* watchSubmitExamTestSaga() {
  yield takeLatest(SUBMIT_EXAM_TEST, workSubmitExamTestSaga);
}

export default watchSubmitExamTestSaga;