import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addUser, editUser } from '../../../stores/actions/index';
import { Redirect } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class AddNewUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: ''
    }
  }
  handleClick = (value) => {
    this.props.onSet(value);
  }

  componentWillMount() {
    if (this.props.history.location.data) {
      this.setState({
        username: this.props.history.location.data.user.name,
        email: this.props.history.location.data.user.email
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
    const { username, email } = this.state
    const data = {
      "name": username,
      "email": email
    }
    this.props.id ? this.props.dispatchEditUser(this.props.id, data) : this.props.dispatchAddUser(data)

  }

  render() {
    console.log(this.state);

    const value = this.state;
    const { isCheckAddSuccess } = this.props.isCheckAddSuccess;
    const { isCheckEditSuccess } = this.props.isCheckEditSuccess;

    return (
      <div className="wrapper-form">
        <FontAwesomeIcon className="icon-modal" icon={faTimes} onClick={() => this.handleClick(false)} />
        <h2 className="form-add__title">{
          this.props.id ? 'Sửa Thông Tin Người Dùng' : 'Thêm Mới Người Dùng'
        }
        </h2>
        <form className="form-add" action="#">
          <div className="form-add__group">
            <label className="form-add__label">Họ Và Tên:</label>
            <input
              className="form-add__input"
              placeholder='Họ và tên'
              name="username"
              value={value.username}
              onChange={(event) => this.handleOnChange(event)}
            />
          </div>
          <div className="form-add__group">
            <label className="form-add__label">Email:</label>
            <input
              className="form-add__input"
              placeholder="Email"
              name="email"
              type="email"
              value={value.email}
              onChange={(event) => this.handleOnChange(event)}
            />
          </div>
          <div className="form-add__event">
            {
              this.props.id ?
                <button type="submit" className="form-add__add" onClick={(event) => this.handleOnSubmit(event, this.props.id)}>Sửa</button> :
                <button type="submit" className="form-add__add" onClick={(event) => this.handleOnSubmit(event, this.props.id)}>Thêm</button>
            }
            {
              isCheckAddSuccess && <Redirect to='/user' />
            }
            {
              isCheckEditSuccess && <Redirect to='/user' />
            }
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isCheckAddSuccess: state.usersReducer,
    isCheckEditSuccess: state.usersReducer
  }
}

export default connect(mapStateToProps, {
  dispatchAddUser: (data) => addUser(data),
  dispatchEditUser: (id, data) => editUser(id, data),
})(withRouter(AddNewUser));
