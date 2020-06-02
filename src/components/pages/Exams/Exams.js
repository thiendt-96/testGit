import React, { Component } from 'react';
import Header from '../../../commons/Header/index';
import MdContacts from '../../../../node_modules/react-ionicons/lib/MdContacts';
import MdAddCircle from '../../../../node_modules/react-ionicons/lib/MdAddCircle';
import ListExams from './ListExams';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reSet } from '../../../stores/actions';

class Exams extends Component {
  handleReset = () => {
    this.props.dispatchReset()
  }
  
  render() {
    return (
      <div className="my-container wrapper">
        <Header />
        <section className="body">
          <div className="content">
            <div className="content__header">
              <div className="content__icon">
                <MdContacts fontSize="50px" color="#ff950e" />
              </div>
              <p className="content__title">Quản Lý Đề Thi</p>
            </div>
            <Link to={'exam/add'} className="add-new" onClick={this.handleReset()}>
              <MdAddCircle fontSize="40px" color="#ff950e" />
              <p className="add-new__text">Thêm Mới</p>
            </Link>
          </div>
          <ListExams />
        </section>
      </div>
    )
  }
}

export default connect(null, {
  dispatchReset: () => reSet(),
})(Exams);
