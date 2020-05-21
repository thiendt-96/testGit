import React, { Component } from 'react';
import Header from '../../../commons/Header/index';
import MdContacts from '../../../../node_modules/react-ionicons/lib/MdContacts';
import MdAddCircle from '../../../../node_modules/react-ionicons/lib/MdAddCircle';
import ListUsers from './ListUsers';
import { reSet } from '../../../stores/actions/index';
import { connect } from 'react-redux';
import AddNewUser from './AddNewUser';

class Users extends Component {
  constructor(props) {
    super(props)
    this.state=  {
      isUser : false
    }
  }
  handleReset = () => {
    this.props.dispatchReset()
  }
  handleClick = () => {
    this.setState({
      isUser : !this.state.isUser
    })
  }
  onSet = (value) => {
    this.setState({
      isUser: value
    })
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
            <div className="add-new" onClick={this.handleReset()}>
              <MdAddCircle fontSize="40px" color="#ff950e" onClick={this.handleClick} />
              <p className="add-new__text">Thêm Mới</p>
              {
                this.state.isUser
                ? <AddNewUser isUser={this.state.isUser} onSet={this.onSet}  />
                :""
              }
            </div>
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

