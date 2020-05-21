import {
  SUBMIT_EXAM_TEST,
  SUBMIT_EXAM_TEST_SUCCESS,
  SUBMIT_EXAM_TEST_ERROR
} from '../../constant/index';

const nameInitialState = {}

const examsTestReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case SUBMIT_EXAM_TEST:
      return {
        ...state,
      }
    case SUBMIT_EXAM_TEST_SUCCESS:
      return {
        ...state,
      }
    case SUBMIT_EXAM_TEST_ERROR:
      return { ...state }
    default:
      return state
  }
}

export default examsTestReducer;