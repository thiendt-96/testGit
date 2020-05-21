import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { addExam, editExam, getAllExams } from '../../../stores/actions/index';
import { Redirect } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class ExamForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      exam: '',
      time: '',
    }
  }
  handleClick = (value) => {
    this.props.onSet(value);
  }


  componentWillMount() {
    if (this.props.history.location.data) {
      this.setState({
        exam: this.props.history.location.data.exam.contest,
        time: this.props.history.location.data.exam.exam_time
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

  handleOnSubmit = (event) => {
    event.preventDefault();
    const { exam, time } = this.state
    const data = {
      "contest": exam,
      "exam_time": parseInt(time)
    }
    this.props.dispatchGetAllExam()
    this.props.id ? this.props.dispatchEditExam(this.props.id, data) : this.props.dispatchAddExam(data)
  }

  render() {
    
    const value = this.state;
    const { isCheckAddSuccess } = this.props.isCheckAddSuccess;
    const { isCheckEditSuccess } = this.props.isCheckEditSuccess;
    return (
      <div className="wrapper-form">
        <FontAwesomeIcon className="icon-modal" icon={faTimes} onClick={() => this.handleClick(false)} />
        <h2 className="form-add__title">{
          this.props.id ? 'Cập Nhật Đề Thi' : 'Thêm Mới Đề Thi'
        }
        </h2>
        <form className="form-add" action="#">
          <div className="form-add__group">
            <label className="form-add__label">Đề Thi:</label>
            <input
              className="form-add__input"
              placeholder="Tên đề thi"
              name="exam"
              value={value.exam}
              onChange={(event) => this.handleOnChange(event)}
            />
          </div>
          <div className="form-add__group">
            <label className="form-add__label">Thời Gian Thi:</label>
            <input
              className="form-add__input"
              placeholder="Thời gian thi"
              name="time"
              value={value.time}
              onChange={(event) => this.handleOnChange(event)}
            />
          </div>
          <div className="form-add__event">
            <Link to='/exam/user'>hello</Link>
            {
              this.props.id ?
                <Link to='/exam' className="form-add__add" onClick={(event) => this.handleOnSubmit(event)}> Sửa</Link> :
                <button className="form-add__add" onClick={(event) => this.handleOnSubmit(event)}>Thêm</button>
            }
            {
              isCheckAddSuccess && <Redirect to='/exam' />
            }
            {
              isCheckEditSuccess && <Redirect to='/exam' />
            }
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isCheckAddSuccess: state.examsReducer,
    isCheckEditSuccess: state.examsReducer
  }
}

export default connect(mapStateToProps, {
  dispatchAddExam: (data) => addExam(data),
  dispatchEditExam: (id, data) => editExam(id, data),
  dispatchGetAllExam: () => getAllExams()
}) (withRouter(ExamForm));
