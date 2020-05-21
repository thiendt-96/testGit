import { all } from "redux-saga/effects";
import watchGetAllUsersSaga from './getAllUsersSaga';
import watchGetAllExamsSaga from './getAllExamsSaga';
import watchGetAllQuestionsSaga from './getAllQuestionsSaga';
import watchDeleteUserSaga from "./deleteUserSaga";
import watchDeleteExamSaga from "./deleteExamSaga";
import watchDeleteQuestionSaga from "./deleteQuestionSaga";
import watchAddUserSaga from "./addUserSaga";
import watchEditUserSaga from "./editUserSaga";
import watchAddExamSaga from "./addExamSaga";
import watchEditExamSaga from "./editExamSaga";
import watchAddQuestionSaga from "./addQuestionSaga";
import watchEditQuestionSaga from "./editQuestionSaga";
import watchSubmitExamTestSaga from "./submitExamTestSaga";

export default function* rootSaga() {
  yield all([
    watchGetAllUsersSaga(),
    watchGetAllExamsSaga(),
    watchGetAllQuestionsSaga(),
    watchDeleteUserSaga(),
    watchDeleteExamSaga(),
    watchDeleteQuestionSaga(),
    watchAddUserSaga(),
    watchEditUserSaga(),
    watchAddExamSaga(),
    watchEditExamSaga(),
    watchAddQuestionSaga(),
    watchEditQuestionSaga(),
    watchSubmitExamTestSaga()
  ])
}
