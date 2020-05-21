import {
  RESET,

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

  GET_ALL_EXAM,
  GET_ALL_EXAM_SUCCESS,
  GET_ALL_EXAM_ERROR,

  ADD_EXAM,
  ADD_EXAM_SUCCESS,
  ADD_EXAM_ERROR,

  EDIT_EXAM,
  EDIT_EXAM_SUCCESS,
  EDIT_EXAM_ERROR,

  DELETE_EXAM,
  DELETE_EXAM_SUCCESS,
  DELETE_EXAM_ERROR,

  GET_ALL_QUESTION,
  GET_ALL_QUESTION_SUCCESS,
  GET_ALL_QUESTION_ERROR,

  ADD_QUESTION,
  ADD_QUESTION_SUCCESS,
  ADD_QUESTION_ERROR,

  EDIT_QUESTION,
  EDIT_QUESTION_SUCCESS,
  EDIT_QUESTION_ERROR,

  DELETE_QUESTION,
  DELETE_QUESTION_SUCCESS,
  DELETE_QUESTION_ERROR,

  SUBMIT_EXAM_TEST,
  SUBMIT_EXAM_TEST_SUCCESS,
  SUBMIT_EXAM_TEST_ERROR
} from '../../constant/index';

export const getAllUsers = () => {
  return {
    type: GET_ALL_USER
  };
};

export const getAllUsersSuccess = (data) => {
  return {
    type: GET_ALL_USER_SUCCESS,
    data
  };
};

export const getAllUsersErrors = (errors) => {
  return {
    type: GET_ALL_USER_ERROR,
    errors
  };
};

export const addUser = (data) => {
  return {
    type: ADD_USER,
    data
  };
};

export const addUserSuccess = (data) => {
  return {
    type: ADD_USER_SUCCESS,
    data
  };
};

export const addUserErrors = (errors) => {
  return {
    type: ADD_USER_ERROR,
    errors
  };
};

export const reSet = () => {
  return {
    type: RESET,
  }
}

export const editUser = (id, data) => {
  console.log('handle click');

  return {
    type: EDIT_USER,
    id,
    data
  };
};

export const editUserSuccess = (data) => {
  return {
    type: EDIT_USER_SUCCESS,
    data
  };
};

export const editUserErrors = (errors) => {
  return {
    type: EDIT_USER_ERROR,
    errors
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    id
  };
};

export const deleteUserSuccess = (data) => {
  return {
    type: DELETE_USER_SUCCESS,
    data
  };
};

export const deleteUserErrors = (errors) => {
  return {
    type: DELETE_USER_ERROR,
    errors
  };
};


export const getAllExams = () => {
  return {
    type: GET_ALL_EXAM
  };
};

export const getAllExamsSuccess = (data) => {
  return {
    type: GET_ALL_EXAM_SUCCESS,
    data
  };
};

export const getAllExamsErrors = (errors) => {
  return {
    type: GET_ALL_EXAM_ERROR,
    errors
  };
};

export const addExam = (data) => {
  return {
    type: ADD_EXAM,
    data
  };
};

export const addExamSuccess = (data) => {
  return {
    type: ADD_EXAM_SUCCESS,
    data
  };
};

export const addExamErrors = (errors) => {
  return {
    type: ADD_EXAM_ERROR,
    errors
  };
};

export const editExam = (id, data) => {
  return {
    type: EDIT_EXAM,
    id,
    data
  };
};

export const editExamSuccess = (data) => {
  return {
    type: EDIT_EXAM_SUCCESS,
    data
  };
};

export const editExamErrors = (errors) => {
  return {
    type: EDIT_EXAM_ERROR,
    errors
  };
};

export const deleteExam = (id) => {
  return {
    type: DELETE_EXAM,
    id
  };
};

export const deleteExamSuccess = (data) => {
  return {
    type: DELETE_EXAM_SUCCESS,
    data
  };
};

export const deleteExamErrors = (errors) => {
  return {
    type: DELETE_EXAM_ERROR,
    errors
  };
};

export const getAllQuestions = () => {
  return {
    type: GET_ALL_QUESTION,
  }
}

export const getAllQuestionsSuccess = (data) => {
  return {
    type: GET_ALL_QUESTION_SUCCESS,
    data
  }
}

export const getAllQuestionsErrors = (errors) => {
  return {
    type: GET_ALL_QUESTION_ERROR,
    errors
  }
}

export const deleteQuestion = (id) => {
  return {
    type: DELETE_QUESTION,
    id
  };
};

export const deleteQuestionSuccess = (data) => {
  return {
    type: DELETE_QUESTION_SUCCESS,
    data
  };
};

export const deleteQuestionErrors = (errors) => {
  return {
    type: DELETE_QUESTION_ERROR,
    errors
  };
};

export const addQuestion = (data) => {
  return {
    type: ADD_QUESTION,
    data
  }
}

export const addQuestionSuccess = (data) => {
  return {
    type: ADD_QUESTION_SUCCESS,
    data
  }
}

export const addQuestionErrors = (errors) => {
  return {
    type: ADD_QUESTION_ERROR,
    errors
  }
}

export const editQuestion = (id, data) => {
  return {
    type: EDIT_QUESTION,
    id,
    data
  };
};

export const editQuestionSuccess = (data) => {
  return {
    type: EDIT_QUESTION_SUCCESS,
    data
  };
};

export const editQuestionErrors = (errors) => {
  return {
    type: EDIT_QUESTION_ERROR,
    errors
  };
};

export const submitExamTest = (id, data) => {
  return {
    type: SUBMIT_EXAM_TEST,
    id,
    data
  }
}

export const submitExamTestSuccess = (data) => {
  return {
    type: SUBMIT_EXAM_TEST_SUCCESS,
    data
  }
}

export const submitExamTestErrors = (errors) => {
  return {
    type: SUBMIT_EXAM_TEST_ERROR,
    errors
  }
}