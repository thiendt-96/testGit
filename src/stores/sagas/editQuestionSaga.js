import { call, put, takeLatest } from 'redux-saga/effects';

import { EDIT_QUESTION } from '../../constant/index';
import {
  editQuestionSuccess,
  editQuestionErrors
} from '../actions/index';
import { editQuestionApi } from '../../apis/index';

function* workEditQuestionSaga(action) {
  try {
    const response = yield call(editQuestionApi, action.id, action.data);
    yield put(editQuestionSuccess(response.data));
  } catch (error) {
    yield put(editQuestionErrors(error));
  }
}

function* watchEditQuestionSaga() {
  yield takeLatest(EDIT_QUESTION, workEditQuestionSaga);
}

export default watchEditQuestionSaga;