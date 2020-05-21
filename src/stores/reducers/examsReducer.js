import {
  GET_ALL_EXAM,
  GET_ALL_EXAM_SUCCESS,
  GET_ALL_EXAM_ERROR,
  DELETE_EXAM,
  DELETE_EXAM_SUCCESS,
  DELETE_EXAM_ERROR,
  ADD_EXAM,
  ADD_EXAM_SUCCESS,
  ADD_EXAM_ERROR,
  EDIT_EXAM,
  EDIT_EXAM_SUCCESS,
  EDIT_EXAM_ERROR,
  RESET
} from '../../constant/index';

const nameInitialState = {
  exams: [],
  isCheckAddSuccess: false,
  isCheckEditSuccess: false,
}

const getAllExamsReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case GET_ALL_EXAM:
      return { ...state }
    case GET_ALL_EXAM_SUCCESS:
      return {
        ...state,
        exams: action.data
      }
    case GET_ALL_EXAM_ERROR:
      return { ...state }
    case ADD_EXAM:
      return {
        ...state,
        isCheckAddSuccess: false,
      }
    case ADD_EXAM_SUCCESS:
      return {
        ...state,
        isCheckAddSuccess: true,
        exams: [...state.exams, action.data]
      }
    case ADD_EXAM_ERROR:
      return {
        ...state,
        isCheckAddSuccess: false,
      }
    case EDIT_EXAM:
      console.log(action.data);

      return {
        ...state,
      }
    case EDIT_EXAM_SUCCESS:
      return {
        ...state,
      }
    case EDIT_EXAM_ERROR:
      return {
        ...state,
        isCheckEditSuccess: false,
      }
    case DELETE_EXAM:
      return { ...state }
    case DELETE_EXAM_SUCCESS:
      return {
        ...state,
        exams: state.exams.filter(exam => exam.id !== action.data.id)
      }
    case DELETE_EXAM_ERROR:
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

export default getAllExamsReducer;