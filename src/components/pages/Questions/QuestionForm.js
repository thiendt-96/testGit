import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addQuestion, editQuestion } from '../../../stores/actions/index';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class QuestionForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      question: '',
      optionsA: '',
      optionsB: '',
      optionsC: '',
      optionsD: '',
      answer: ''
    }
  }

  componentWillMount() {
    if (this.props.history.location.data) {
      this.setState({
        question: this.props.history.location.data.question.question,
        answer: this.props.history.location.data.question.answer,
        optionsA: this.props.history.location.data.question.options[0],
        optionsB: this.props.history.location.data.question.options[1],
        optionsC: this.props.history.location.data.question.options[2],
        optionsD: this.props.history.location.data.question.options[3]
      });
    }
  }

  handleOnChange = (event) => {
    const { name } = event.target
    const { value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = (event, isEdit) => {
    event.preventDefault();
    const { question, answer, optionsA, optionsB, optionsC, optionsD } = this.state
    const data = {
      "question": question,
      "options": optionsA || optionsB || optionsC || optionsD ? [optionsA, optionsB, optionsC, optionsD] : [],
      "answer": answer
    }    
    const { id } = isEdit ? this.props.history.location.data.question : ''
    isEdit ? this.props.dispatchEditQuestion(id, data) : this.props.dispatchAddQuestion(data)
  }

  render() {
    const isEdit = this.props.match.params.id;
    const value = this.state;
    const { isCheckAddSuccess } = this.props.isCheckAddSuccess;
    const { isCheckEditSuccess } = this.props.isCheckEditSuccess;

    return (
      <div className="wrapper-form">
        <h2 className="form-add__title">{
          isEdit ? 'Cập Nhật Câu Hỏi' : 'Thêm Mới Câu Hỏi'
        }
        </h2>
        <form className="form-add" action="#">
          <div className="form-add__group">
            <label className="form-add__label">Câu Hỏi:</label>
            <input
              className="form-add__input"
              placeholder="Nội dung câu hỏi"
              name="question"
              value={value.question}
              onChange={(event) => this.handleOnChange(event)}
            />
          </div>
          <div className="form-add__group">
            <label className="form-add__label">Đáp Án</label>
            <input
              className="form-add__input"
              placeholder="Đáp Án"
              name="answer"
              value={value.answer}
              onChange={(event) => this.handleOnChange(event)}
            />
          </div>
          <div className="form-add__group">
            <label className="form-add__label">Nội dung trả lời</label>
            <div className="question">
              <div className="question__wrapper">
                <label className="form-add__label">Đáp án A</label>
                <input
                  className="form-add__input"
                  placeholder="Đáp án A"
                  name="optionsA"
                  value={value.optionsA}
                  onChange={(event) => this.handleOnChange(event)}
                />
              </div>
              <div className="question__wrapper">
                <label className="form-add__label">Đáp án B</label>
                <input
                  className="form-add__input"
                  placeholder="Đáp án B"
                  name="optionsB"
                  value={value.optionsB}
                  onChange={(event) => this.handleOnChange(event)}
                />
              </div>
              <div className="question__wrapper">
                <label className="form-add__label">Đáp án C</label>
                <input
                  className="form-add__input"
                  placeholder="Đáp án C"
                  name="optionsC"
                  value={value.optionsC}
                  onChange={(event) => this.handleOnChange(event)}
                />
              </div>
              <div className="question__wrapper">
                <label className="form-add__label">Đáp án D</label>
                <input
                  className="form-add__input"
                  placeholder="Đáp án D"
                  name="optionsD"
                  value={value.optionsD}
                  onChange={(event) => this.handleOnChange(event)}
                />
              </div>
            </div>
          </div>
          <div className="form-add__event">
            <Link to='/question' className="form-add__cancel">
              Thoát
            </Link>
            {
              isEdit ?
                <button className="form-add__add" onClick={(event) => this.handleOnSubmit(event, isEdit)}>Sửa</button> :
                <button className="form-add__add" onClick={(event) => this.handleOnSubmit(event, isEdit)}>Thêm</button>
            }
            {
              isCheckAddSuccess && <Redirect to='/question' />
            }
            {
              isCheckEditSuccess && <Redirect to='/question' />
            }
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isCheckAddSuccess: state.questionsReducer,
    isCheckEditSuccess: state.questionsReducer
  }
}

export default connect(mapStateToProps, {
  dispatchAddQuestion: (data) => addQuestion(data),
  dispatchEditQuestion: (id, data) => editQuestion(id, data),
})(withRouter(QuestionForm));
