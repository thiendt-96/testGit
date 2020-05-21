import { call, put, takeLatest } from "redux-saga/effects";
import { GET_ALL_QUESTION } from '../../constant/index';
import {
  getAllQuestionsSuccess,
  getAllQuestionsErrors
} from "../actions";
import { getAllQuestionsApi } from '../../apis/index';

function* workGetAllQuestionsSaga(action) {
  try {
    const response = yield call(getAllQuestionsApi);
    yield put(getAllQuestionsSuccess(response.data));
  } catch (error) {
    yield put(getAllQuestionsErrors(error));
  }
}

function* watchGetAllQuestionsSaga() {
  yield takeLatest(GET_ALL_QUESTION, workGetAllQuestionsSaga);
}

export default watchGetAllQuestionsSaga;
