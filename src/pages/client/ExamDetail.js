import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getAllExams,
  submitExamTest
} from '../../stores/actions';
import { withRouter } from 'react-router';
import ModalSubmitExam from '../../components/pages/client/ModalSubmitExam';
import ModalSubmitSuccessful from '../../components/pages/client/ModalSubmitSuccessful';

class ExamDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isStartQuiz: false,
      count: 0,
      running: false,
      options: {},
      submitSuccess: false
    }
  }

  componentDidMount() {
    this.props.dispatchGetAllExams();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.running !== prevState.running) {
      switch (this.state.running) {
        case true:
          this.handleStartCountDown();
      }
    }
  }

  handleClick = (timeTotal) => {
    this.props.dispatchGetAllExams();
    this.setState({
      isStartQuiz: true,
      count: timeTotal,
      running: true
    })
  }

  handleStartCountDown() {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState(
        { count: newCount >= 0 ? newCount : 0 }
      );
    }, 1000);
  }

  handleStop = (event, id) => {
    event.preventDefault();
    if (this.timer) {
      clearInterval(this.timer);
      this.setState(
        { running: false }
      );
    }
    const { options } = this.state
    const data = { "answer": [options] }
    this.props.dispatchSubmitExamTest(id, data);
    this.setState({
      submitSuccess: true
    })
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
      this.setState(
        { running: false }
      );
    }
  }

  format = (time) => {
    let hours = Math.floor(time / 60 / 60);
    let minutes = Math.floor(time / 60 - (hours * 60));
    let seconds = Math.floor(time - (hours * 60 * 60 + minutes * 60))
    minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
    seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
    return { hours, minutes, seconds }
  }

  handleOnChange = (event) => {
    const { value, name } = event.target
    this.setState(state => ({
      options: {
        ...state.options,
        [name]: value
      }
    }))
  }

  render() {
    const { isStartQuiz, count, submitSuccess } = this.state;
    const exams = this.props.exams.exams;
    const { id } = this.props.match.params;
    const newExam = exams.length > 0 ? exams.filter(exam => exam.id === id) : '';
    const { questions } = newExam[0];
    const timeTotal = isStartQuiz ? count : newExam[0].exam_time * 60;
    const timeTotalFormat = this.format(timeTotal);

    return (
      <div className="my-container exam-detail">
        <div className="exam-detail__header">
          <div className="exam-detail__title">
            <p className="text">Đề thi TOEIC chuẩn IIG ngày </p>
            <p className="text">31/12/2019</p>
          </div>
          <div className="profile exam-detail__title exam-detail--reset">
            <p className="profile__name">Name: nguyễn văn A</p>
            <p className="profile__email">Email: nva@gmail.com</p>
          </div>
        </div>
        <div className="exam-detail__time">
          <p>Thời gian</p>
          <div className="countdown">
            <span className="countdown__item hours">{timeTotalFormat.hours}&nbsp;h</span>
            <span className="countdown__item minutes">{timeTotalFormat.minutes}&nbsp;m</span>
            <span className="countdown__item seconds">{timeTotalFormat.seconds}&nbsp;s</span>
          </div>
          <button className="exam-detail__btn" onClick={() => this.handleClick(timeTotal)} disabled={isStartQuiz && "disabled"} >
            BẮT ĐẦU THI
          </button>
        </div>
        <form>
          {
            isStartQuiz ? <div className="exam-detail__content">
              <div className="question-list">{
                questions.map(question => (
                  <div className="question-list__item" key={question.id}>
                    <p className="question-list__title">Câu{question.id}: {question.question}</p>
                    <div className="answer">
                      {
                        question.options.map(option => (
                          <div className="answer__item" key={option}>
                            <input
                              type="radio"
                              id={option}
                              name={`câu: ${question.id}`}
                              value={option}
                              onChange={this.handleOnChange}
                            />
                            <label>{option}</label>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
              </div>
            </div> : ''
          }
          <div className="exam-detail__footer">
            {
              isStartQuiz ?
                <button
                  type="submit"
                  className="exam-detail__btn exam-detail__btn--fix"
                  onClick={(event) => this.handleStop(event, id)}
                >
                  Nộp Bài Thi
              </button> : ''
            }
          </div>
          {
            timeTotal === 0 ? <ModalSubmitExam handleStop={(event, id) => this.handleStop(event, id)} id={id} /> : ''
          }
        </form>
        {
          submitSuccess && <ModalSubmitSuccessful />
        }
      </div >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    exams: state.examsReducer,
  }
}

export default connect(
  mapStateToProps,
  {
    dispatchGetAllExams: () => getAllExams(),
    dispatchSubmitExamTest: (id, data) => submitExamTest(id, data)
  }
)(withRouter(ExamDetail));