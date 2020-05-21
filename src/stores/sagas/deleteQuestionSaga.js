import { call, put, takeLatest } from 'redux-saga/effects';
import { DELETE_QUESTION } from '../../constant/index';
import {
  deleteQuestionSuccess,
  deleteQuestionErrors
} from '../actions/index';
import { deteleQuestionApi } from '../../apis/index';

function* workDeleteQuestionSaga(action) {
  try {
    const response = yield call(deteleQuestionApi, action.id);
    yield put(deleteQuestionSuccess(response.data));
  } catch (error) {
    yield put(deleteQuestionErrors(error));
  }
}

function* watchDeleteQuestionSaga() {
  yield takeLatest(DELETE_QUESTION, workDeleteQuestionSaga);
}

export default watchDeleteQuestionSaga;