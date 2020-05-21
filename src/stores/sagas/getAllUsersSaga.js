import { call, put, takeLatest } from "redux-saga/effects";
import { GET_ALL_USER } from "../../constant/index";
import { getAllUsersSuccess, getAllUsersErrors } from "../actions";
import { getAllUsersApi } from '../../apis/index';

function* workGetAllUsersSaga(action) {
  try {
    const response = yield call(getAllUsersApi);
    yield put(getAllUsersSuccess(response.data));
  } catch (error) {
    yield put(getAllUsersErrors(error));
  }
}

function* watchGetAllUsersSaga() {
  yield takeLatest(GET_ALL_USER, workGetAllUsersSaga);
}

export default watchGetAllUsersSaga;
