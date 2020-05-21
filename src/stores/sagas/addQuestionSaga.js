import { call, put, takeLatest } from 'redux-saga/effects';

import { ADD_QUESTION } from '../../constant/index';
import {
  addQuestionSuccess,
  addQuestionErrors
} from '../actions/index';
import { addQuestionApi } from '../../apis/index';

function* workAddQuestionSaga(action) {
  try {
    const response = yield call(addQuestionApi, action.data);
    yield put(addQuestionSuccess(response.data));
  } catch (error) {
    yield put(addQuestionErrors(error));
  }
}

function* watchAddQuestionSaga() {
  yield takeLatest(ADD_QUESTION, workAddQuestionSaga);
}

export default watchAddQuestionSaga;
