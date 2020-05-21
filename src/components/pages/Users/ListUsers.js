import React, { Component } from 'react'
import ListUsersItem from './ListUsersItem'
import { connect } from 'react-redux'
import { deleteUser, editUser } from '../../../stores/actions';

class ListUsers extends Component {
  render() {
    const { users } = this.props.users;
    // console.log("users", users.length);

    const handleDeleteUser = (id) => {
      this.props.distpatchDeleteUse(id)
    }

    return (
      <div>
        <table className="table">
          <tbody>
            <tr className="table__row" colSpan="5">
              <th className="table__col--center">STT</th>
              <th className="table__col--center">Tên</th>
              <th className="table__col--center">Email</th>
              <th className="table__col--center">Trạng Thái</th>
              <th className="table__col--center">Sửa</th>
              <th className="table__col--center">Xóa</th>
            </tr>
            {
              (users && users.length) > 0 && users.map((user) => (
                <ListUsersItem
                  user={user}
                  key={user ? user.id : ''}
                  handleDelete={handleDeleteUser}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer
  }
}

export default connect(mapStateToProps, {
  distpatchDeleteUse: (id) => deleteUser(id),
  distpatchEditUser: (user) => editUser(user)
})(ListUsers);