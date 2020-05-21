import React, { Component } from 'react';
import { connect } from 'react-redux';

class ExamResults extends Component {
  render() {
    return (
      <div className="my-container">

        <div className="result-exams">
          <div className="title">
            Danh Sách Kết Quả Thi
        </div>
          <div className="result-exams__list">
            <div className="result-exams__row">
              <div className="result-exams__col">STT</div>
              <div className="result-exams__col">Nội Dung Thi</div>
              <div className="result-exams__col">Kết Quả Thi</div>
              <div className="result-exams__col">Thời Gian Thi</div>
              <div className="result-exams__col">Xem Chi Tiết</div>
            </div>
            <div className="result-exams__row">
              <div className="result-exams__col">1</div>
              <div className="result-exams__col">Đề 1</div>
              <div className="result-exams__col">190/200</div>
              <div className="result-exams__col">1212</div>
              <div className="result-exams__col">Xem</div>
            </div>
            <div className="result-exams__row">
              <div className="result-exams__col">1</div>
              <div className="result-exams__col">Đề 1</div>
              <div className="result-exams__col">190/200</div>
              <div className="result-exams__col">1212</div>
              <div className="result-exams__col">Xem</div>
            </div>
            <div className="result-exams__row">
              <div className="result-exams__col">1</div>
              <div className="result-exams__col">Đề 1</div>
              <div className="result-exams__col">190/200</div>
              <div className="result-exams__col">1212</div>
              <div className="result-exams__col">Xem</div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default connect(null, null)(ExamResults);