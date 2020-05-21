import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ModalSubmitSuccessful extends Component {
  render() {
    return (
      <div className="wrapper-modal">
        <div className="modal">
          <p className="modal__content">Nộp Bài Thành Công!</p>
          <Link to="/list-exam" className="modal__btn-cancel">Thoát</Link>
        </div>
      </div>
    );
  }
}

export default ModalSubmitSuccessful;