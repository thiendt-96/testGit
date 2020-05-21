import React, { Component } from 'react';
import IosTrashOutline from 'react-ionicons/lib/IosTrashOutline';
import IosCreate from 'react-ionicons/lib/IosCreate';
import { Link } from 'react-router-dom';

class ListQuestionsItem extends Component {
  handleDeleteQuestion = (id) => {
    this.props.handleDelete(id)
  }

  render() {
    const { question } = this.props;
    const newTo = {
      pathname: `question/${question.id}`,
      data: { question }
    }

    return (
      <React.Fragment>
        <tr className="table__row">
          <td className="table__col table__col--center table__col--fix-width">{question.id}</td>
          <td className="table__col">{question.question}</td>
          <td className="table__col table__col--center">{question.answer}</td>
          <td className="table__col table__col--center table__col--fix-width table__col--pointer">
            <Link to={newTo} onClick={this.handleReset} >
              <IosCreate color="#007ab5" />
            </Link>
          </td>
          <td className="table__col table__col--center table__col--fix-width table__col--pointer">
            <button onClick={() => this.handleDeleteQuestion(question.id)}>
              <IosTrashOutline color="red" />
            </button>
          </td>
        </tr>
      </React.Fragment >
    )
  }
}

export default ListQuestionsItem;