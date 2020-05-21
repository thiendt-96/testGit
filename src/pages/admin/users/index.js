import React, { Component } from 'react';
import UsersComponent from '../../../components/pages/Users/users';
import { getAllUsers } from '../../../stores/actions';
import { connect } from 'react-redux';

class Users extends Component {
  componentDidMount() {
    this.props.dispathGetAllUser();
  }

  render() {
    return (
      <UsersComponent />
    );
  }
}

export default connect(
  null,
  {
    dispathGetAllUser: () => getAllUsers()
  }
)(Users);