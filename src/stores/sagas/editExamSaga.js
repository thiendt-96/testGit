import { call, put, takeLatest } from 'redux-saga/effects';

import { EDIT_EXAM } from '../../constant/index';
import {
  editExamSuccess,
  editExamErrors
} from '../actions/index';
import { editExamApi } from '../../apis/index';

function* workEditExamSaga(action) {
  try {
    const response = yield call(editExamApi, action.id, action.data);
    yield put(editExamSuccess(response.data));
  } catch (error) {
    yield put(editExamErrors(error));
  }
}

function* watchEditExamSaga() {
  yield takeLatest(EDIT_EXAM, workEditExamSaga);
}

export default watchEditExamSaga;