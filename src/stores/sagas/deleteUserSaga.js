import { call, put, takeLatest } from 'redux-saga/effects';

import { DELETE_USER } from '../../constant/index';
import {
  deleteUserSuccess,
  deleteUserErrors
} from '../actions/index';
import { deteleUserApi } from '../../apis/index';

function* workDeleteUserSaga(action) {
  try {
    const response = yield call(deteleUserApi, action.id);
    yield put(deleteUserSuccess(response.data));
  } catch (error) {
    yield put(deleteUserErrors(error));
  }
}

function* watchDeleteUserSaga() {
  yield takeLatest(DELETE_USER, workDeleteUserSaga);
}

export default watchDeleteUserSaga;