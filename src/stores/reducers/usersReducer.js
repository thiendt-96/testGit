import {
  GET_ALL_USER,
  GET_ALL_USER_SUCCESS,
  GET_ALL_USER_ERROR,
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  EDIT_USER,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  RESET
} from '../../constant/index';

const nameInitialStateUsers = {
  users: [],
  isCheckAddSuccess: false,
  isCheckEditSuccess: false
};

export default (state = nameInitialStateUsers, action) => {
  switch (action.type) {
    case GET_ALL_USER:
      return {
        ...state,
      }
    case GET_ALL_USER_SUCCESS:
      return {
        ...state,
        users: action.data
      }
    case GET_ALL_USER_ERROR:
      return { ...state }
    case ADD_USER:
      return {
        ...state,
        isCheckAddSuccess: false,
      }
    case ADD_USER_SUCCESS:
      return {
        ...state,
        isCheckAddSuccess: true,
        users: [...state.users, action.data]
      }
    case ADD_USER_ERROR:
      return {
        ...state,
        isCheckAddSuccess: false,
      }
    case EDIT_USER:
      return {
        // ...state, 
      }
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        isCheckEditSuccess: true,
        // users: [...state.users.findIndex(user => user.id === action.data.id)]
      }
    case EDIT_USER_ERROR:
      return {
        ...state,
        isCheckEditSuccess: false,
      }
    case DELETE_USER:
      return { ...state }
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.data.id)
      }
    case DELETE_USER_ERROR:
      return { ...state }
    case RESET:
      return {
        ...state,
        isCheckAddSuccess: false,
        isCheckEditSuccess: false
      }
    default:
      return state
  }
}
