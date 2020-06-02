import React, { Component } from 'react';
import IosTrashOutline from '../../../../node_modules/react-ionicons/lib/IosTrashOutline';
import IosCreate from '../../../../node_modules/react-ionicons/lib/IosCreate';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reSet } from '../../../stores/actions/index';

class ListUsersItem extends Component {
  handleDeleteUser = (id) => {
    this.props.handleDelete(id)
  }

  handleReset = () => {

  }

  render() {
    const { user } = this.props;
    const color = user.status === true ? 'table__col--green' : 'table__col--red';
    const newTo = {
      pathname: `/user/edit/${user.id}`,
      data: { user }
    }
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
            <Link to={newTo} onClick={this.handleReset} >
              <IosCreate color="#007ab5" />
            </Link>
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
