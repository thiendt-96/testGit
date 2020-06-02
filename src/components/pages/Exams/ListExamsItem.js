import React, { Component } from 'react';
import IosTrashOutline from '../../../../node_modules/react-ionicons/lib/IosTrashOutline';
import IosCreate from '../../../../node_modules/react-ionicons/lib/IosCreate';
import { Link } from 'react-router-dom';
class ListExamsItem extends Component {

  handleDeleteExam = (id) => {
    this.props.handleDelete(id)
  }

  render() {
    const { exam } = this.props;
    const newTo = {
      pathname: `/exam/edit/${exam.id}`,
      data: { exam }
    }
    return (
      <React.Fragment>
        <tr className="table__row">
          <td className="table__col table__col--center table__col--fix-width">{exam.id}</td>
          <td className="table__col table__col--center">{exam.contest}</td>
          <td className="table__col table__col--center">{exam.exam_time}</td>
          <td className="table__col table__col--center table__col--fix-width table__col--pointer">
            <Link to={newTo} onClick={this.handleReset} >
              <IosCreate color="#007ab5" />
            </Link>
          </td>
          <td className="table__col table__col--center table__col--fix-width table__col--pointer">
            <button onClick={() => this.handleDeleteExam(exam.id)}>
              <IosTrashOutline color="red" />
            </button>
          </td>
        </tr>
      </React.Fragment>
    )
  }
}

export default ListExamsItem;
