import {
  GET_ALL_QUESTION,
  GET_ALL_QUESTION_SUCCESS,
  GET_ALL_QUESTION_ERROR,
  DELETE_QUESTION,
  DELETE_QUESTION_SUCCESS,
  DELETE_QUESTION_ERROR,
  ADD_QUESTION,
  ADD_QUESTION_SUCCESS,
  ADD_QUESTION_ERROR,
  EDIT_QUESTION,
  EDIT_QUESTION_SUCCESS,
  EDIT_QUESTION_ERROR,
  RESET
} from '../../constant/index';

const nameInitialState = {
  questions: [],
  isCheckEditSuccess: false,
  isCheckAddSuccess: false
};

const getAllQuestionsReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case GET_ALL_QUESTION:
      return { ...state }
    case GET_ALL_QUESTION_SUCCESS:
      return {
        ...state,
        questions: action.data
      }
    case GET_ALL_QUESTION_ERROR:
      return { ...state }
    case ADD_QUESTION:
      return {
        ...state,
        isCheckAddSuccess: false,
      }
    case ADD_QUESTION_SUCCESS:
      return {
        ...state,
        isCheckAddSuccess: true,
        questions: [state.questions, action.data]
      }
    case ADD_QUESTION_ERROR:
      return {
        ...state,
        isCheckAddSuccess: false,
      }
    case EDIT_QUESTION:
      return {
        ...state,
      }
    case EDIT_QUESTION_SUCCESS:
      return {
        ...state,
        isCheckEditSuccess: true,
        questions: action.data
      }
    case EDIT_QUESTION_ERROR:
      return {
        ...state,
        isCheckEditSuccess: false,
      }
    case DELETE_QUESTION:
      return { ...state }
    case DELETE_QUESTION_SUCCESS:
      return {
        ...state,
        questions: state.questions.filter(question => question.id !== action.data.id)
      }
    case DELETE_QUESTION_ERROR:
      return { ...state }
    case RESET:
      return {
        ...state,
        isCheckEditSuccess: false,
        isCheckAddSuccess: false
      }
    default:
      return state
  }
}

export default getAllQuestionsReducer;