import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../commons/Header/index';
import MdContacts from '../../../../node_modules/react-ionicons/lib/MdContacts';
import MdAddCircle from '../../../../node_modules/react-ionicons/lib/MdAddCircle';
import ListUsers from './ListUsers';
import { reSet } from '../../../stores/actions/index';
import { connect } from 'react-redux';

class Users extends Component {
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
              <p className="content__title">Quản Lý Tài Khoản</p>
            </div>
            <Link to="/user/add" className="add-new" onClick={this.handleReset()}>
              <MdAddCircle fontSize="40px" color="#ff950e" />
              <p className="add-new__text">Thêm Mới</p>
            </Link>
          </div>
          <ListUsers />
        </section>
      </div>
    )
  }
}

export default connect(null, {
  dispatchReset: () => reSet(),
})(Users);

