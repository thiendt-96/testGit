import React from 'react';
import Users from '../pages/admin/users/index';
import Exams from '../pages/admin/exams/index';
import Questions from '../pages/admin/questions/index';
import AddNewUser from '../components/pages/Users/AddNewUser';
import ExamForm from '../components/pages/Exams/ExamForm';
import QuestionForm from '../components/pages/Questions/QuestionForm';
import ListExams from '../pages/client/ListExams';
import ExamDetail from '../pages/client/ExamDetail';
import ExamResults from '../pages/client/ExamResults';

const routes = [
  {
    path: "/user",
    exact: true,
    main: ({ history }) => <Users history={history} />
  },
  {
    path: "/user/add",
    exact: true,
    main: ({ history }) => <AddNewUser history={history} />
  },
  {
    path: "/user/edit/:id",
    exact: true,
    main: ({ history, data }) => <AddNewUser data={data} history={history} />
  },
  {
    path: "/exam",
    exact: true,
    main: ({ history }) => <Exams history={history} />
  },
  {
    path: "/exam/add",
    exact: true,
    main: ({ history }) => <ExamForm history={history} />
  },
  {
    path: "/exam/edit/:id",
    exact: true,
    main: ({ history, data }) => <ExamForm data={data} history={history} />
  },
  {
    path: "/question",
    exact: true,
    main: ({ history }) => <Questions history={history} />
  },
  {
    path: "/question/add",
    exact: true,
    main: ({ history }) => <QuestionForm history={history} />
  },
  {
    path: "/question/:id",
    exact: true,
    main: ({ history }) => <QuestionForm history={history} />
  },
  {
    path: "/list-exam",
    exact: true,
    main: ({ history }) => <ListExams history={history} />
  },
  {
    path: "/exam-test/:id",
    exact: true,
    main: ({ history }) => <ExamDetail history={history} />
  },
  {
    path: "/list-result",
    exact: true,
    main: ({ history }) => <ExamResults history={history} />
  },
]

export default routes;