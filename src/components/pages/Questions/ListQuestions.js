import React, { Component } from 'react';
import ListQuestionsItem from './ListQuestionsItem';
import { connect } from 'react-redux';
import { deleteQuestion } from '../../../stores/actions';

class ListQuestions extends Component {
  render() {
    const { questions } = this.props.questions;
    const handleDeleteQuestion = (id) => {
      this.props.distpatchDeleteQuestion(id)
    }

    return (
      <div>
        <table className="table">
          <tbody>
            <tr className="table__row" colSpan="5">
              <th className="table__col--center">STT</th>
              <th className="table__col--center">Câu Hỏi</th>
              <th className="table__col--center">Đáp án</th>
              <th className="table__col--center">Sửa</th>
              <th className="table__col--center">Xóa</th>
            </tr>
            {
              questions.length > 0 && questions.map((question) => (
                <ListQuestionsItem
                  question={question}
                  key={question.id}
                  handleDelete={handleDeleteQuestion}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.questionsReducer
  }
}

export default connect(mapStateToProps, {
  distpatchDeleteQuestion: (id) => deleteQuestion(id)
})(ListQuestions);