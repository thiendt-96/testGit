import { call, put, takeLatest } from 'redux-saga/effects';

import { EDIT_USER } from '../../constant/index';
import {
  editUserSuccess,
  editUserErrors
} from '../actions/index';
import { editUserApi } from '../../apis/index';

function* workEditUserSaga(action) {
  try {
    const response = yield call(editUserApi, action.id, action.data);
    console.log(response);

    yield put(editUserSuccess(response.data));
  } catch (error) {
    yield put(editUserErrors(error));
  }
}

function* watchEditUserSaga() {
  yield takeLatest(EDIT_USER, workEditUserSaga);
}

export default watchEditUserSaga;