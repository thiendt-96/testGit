import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListExams extends Component {
  render() {
    const { exams } = this.props

    return (
      <div className="my-container">
        <div className="title">
          Danh Sách Đề Thi:
        </div>
        <div className="exam" >
          {
            exams.length > 0 ?
              exams.map((exam) => (
                <Link className="exam__item"
                  to={{ pathname: `exam-test/${exam.id}`, data: { exam } }} >
                  <div className="exam__name">
                    <p className="text">{exam.contest}</p>
                  </div>
                  <div className="exam__content">
                    <div className="exam__time">
                      Thời gian: {exam.exam_time}
                    </div>
                    <div className="exam__title">
                      Đề thi TOEIC chuẩn IIG ngày 18/05/2020
                    </div>
                  </div>
                </Link>
              )) : ''
          }
        </div>
      </div >
    );
  }
}

export default ListExams;