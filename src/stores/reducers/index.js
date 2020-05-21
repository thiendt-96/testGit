import { combineReducers } from "redux";
import usersReducer from './usersReducer';
import examsReducer from './examsReducer';
import questionsReducer from './questionsReducer';
import examsTestReducer from './examsTestReducer';

const rootReducer = combineReducers({
    usersReducer,
    examsReducer,
    questionsReducer,
    examsTestReducer
})

export default rootReducer;