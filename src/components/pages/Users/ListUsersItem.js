import React, { Component } from 'react';
import IosTrashOutline from '../../../../node_modules/react-ionicons/lib/IosTrashOutline';
import IosCreate from '../../../../node_modules/react-ionicons/lib/IosCreate';
import { connect } from 'react-redux';
import { reSet } from '../../../stores/actions/index';
import AddNewUser from './AddNewUser';

class ListUsersItem extends Component {
  constructor(props) {
    super(props)
    this.state={
      isUser: false,
      idUser:''
    }
  }
  handleDeleteUser = (id) => {
    this.props.handleDelete(id)
  }

  handleClick = (id) => {
    this.setState({
      isUser: !this.state.isUser,
      idUser: id

    })
  }
  onSet = (value) => {
    this.setState({
      isUser: value
    })
  }

  render() {
    const { user } = this.props;
    const color = user.status === true ? 'table__col--green' : 'table__col--red';

    return (
      <React.Fragment>
        <tr className="table__row">
          <td className="table__col table__col--center table__col--fix-width">{user.id}</td>
          <td className="table__col">{user.name}</td>
          <td className="table__col">{user.email}</td>
          <td className={`${color} "table__col table__col--center table__col--fix-width table__col--color"`}>
            {user.status === true ? 'Hoạt Động' : 'Tạm Vắng'}
          </td>
          <td className="table__col table__col--center table__col--fix-width table__col--pointer">
            <IosCreate color="#007ab5" onClick={() => this.handleClick(user.id)} />
            {
              this.state.isUser
                ? <AddNewUser isUser={this.state.isUser} onSet={this.onSet} id={this.state.idUser} />
                : ""
            }
          </td>
          <td className="table__col table__col--center table__col--fix-width table__col--pointer">
            <button onClick={() => this.handleDeleteUser(user.id)}>
              <IosTrashOutline color="red" />
            </button>
          </td>
        </tr>
      </React.Fragment>
    )
  }
}

export default connect(null, {
  dispatchReset: () => reSet(),
})(ListUsersItem);
