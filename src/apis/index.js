import { API_END_POINT } from '../constant/index';
import axios from 'axios';

const instance = axios.create({
    baseURL: API_END_POINT
});

export const getAllUsersApi = () => {
    return instance.get('/users');
};

export const addUserApi = (data) => {
    return instance.post('/users', data);
};

export const editUserApi = (id, data) => {
    return instance.put(`/users/${id}`, data);
};

export const deteleUserApi = (id) => {
    return instance.delete(`/users/${id}`);
};

export const getAllExamsApi = () => {
    return instance.get('/exams');
};

export const addExamApi = (data) => {
    return instance.post('/exams', data);
};

export const editExamApi = (id, data) => {
    return instance.put(`/exams/${id}`, data);
};

export const deteleExamApi = (id) => {
    return instance.delete(`/exams/${id}`);
};

export const getAllQuestionsApi = () => {
    return instance.get('/questions');
};

export const addQuestionApi = (data) => {
    return instance.post('/questions', data);
};

export const editQuestionApi = (id, data) => {
    return instance.put(`/questions/${id}`, data);
};

export const deteleQuestionApi = (id) => {
    return instance.delete(`/questions/${id}`);
};

export const submitExamTestApi = (id, data) => {
    return instance.put(`/exams-test/${id}`, data);
};
