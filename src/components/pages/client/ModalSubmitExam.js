import React, { Component } from 'react';

class ModalSubmitExam extends Component {
  handleSubmit = (id, event) => {
    this.props.handleStop(event, id)
  }

  render() {
    const { id } = this.props
    return (
      <div className="wrapper-modal">
        <div className="modal modal--gray">
          <p className="modal__title">Hết Thời Gian</p>
          <button type="submit"
            className="exam-detail__btn"
            onClick={(event) => this.handleSubmit(id, event)}
          >
            Nộp Bài Thi
          </button>
        </div>
      </div>
    );
  }
}

export default ModalSubmitExam;