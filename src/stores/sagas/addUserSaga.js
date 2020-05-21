import { call, put, takeLatest } from 'redux-saga/effects';

import { ADD_USER } from '../../constant/index';
import {
 addUserSuccess,
 addUserErrors
} from '../actions/index';
import { addUserApi } from '../../apis/index';

function* workAddUserSaga(action) {
  try {
    const response = yield call(addUserApi, action.data);
    yield put(addUserSuccess(response.data));
  } catch (error) {
    yield put(addUserErrors(error));
  }
}

function* watchAddUserSaga() {
  yield takeLatest(ADD_USER, workAddUserSaga);
}

export default watchAddUserSaga;
