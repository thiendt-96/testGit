import { call, put, takeLatest } from "redux-saga/effects";
import { GET_ALL_EXAM } from "../../constant/index";
import {
  getAllExamsSuccess,
  getAllExamsErrors
} from "../actions";
import { getAllExamsApi } from '../../apis/index';

function* workGetAllExamsSaga(action) {
  try {
    const response = yield call(getAllExamsApi);
    yield put(getAllExamsSuccess(response.data));
  } catch (error) {
    yield put(getAllExamsErrors(error));
  }
}

function* watchGetAllExamsSaga() {
  yield takeLatest(GET_ALL_EXAM, workGetAllExamsSaga);
}

export default watchGetAllExamsSaga;
