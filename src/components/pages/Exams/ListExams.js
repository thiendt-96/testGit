import React, { Component } from 'react'
import ListExamsItem from './ListExamsItem'
import { connect } from 'react-redux'
import { deleteExam } from '../../../stores/actions';

class ListExams extends Component {
  render() {
    const { exams } = this.props.exams;
    const handleDeleteExam = (id) => {
      this.props.distpatchDeleteExam(id)
    }

    return (
      <div>
        <table className="table">
          <tbody>
            <tr className="table__row" colSpan="5">
              <th className="table__col--center">STT</th>
              <th className="table__col--center">Đề Thi</th>
              <th className="table__col--center">Thời Gian Làm Bài</th>
              <th className="table__col--center">Sửa</th>
              <th className="table__col--center">Xóa</th>
            </tr>
            {
              exams.length > 0 && exams.map((exam) => (
                <ListExamsItem
                  exam={exam}
                  key={exam.id}
                  handleDelete={handleDeleteExam}
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
    exams: state.examsReducer
  }
}

export default connect(mapStateToProps, {
  distpatchDeleteExam: (id) => deleteExam(id)
})(ListExams);
