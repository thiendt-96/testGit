import React, { Component } from 'react';
import IosTrashOutline from '../../../../node_modules/react-ionicons/lib/IosTrashOutline';
import IosCreate from '../../../../node_modules/react-ionicons/lib/IosCreate';
import ExamForm from './ExamForm';
class ListExamsItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: false,
      idEdit: ''
    }
  }
  
  handleDeleteExam = (id) => {
    this.props.handleDelete(id)
  }
  handleClick = (id) => {    
    this.setState({
      isEdit: !this.state.isEdit,
      idEdit: id
      
    })
    
  }
  onSet = (value) => {
    this.setState({
      isEdit : value
    })
  }

  render() {
    const { exam } = this.props;
    return (
      <React.Fragment>
        <tr className="table__row">
          <td className="table__col table__col--center table__col--fix-width">{exam.id}</td>
          <td className="table__col table__col--center">{exam.contest}</td>
          <td className="table__col table__col--center">{exam.exam_time}</td>
          <td className="table__col table__col--center table__col--fix-width table__col--pointer">
            <IosCreate color="#007ab5" onClick={() => this.handleClick(exam.id)}/>
            {
              this.state.isEdit
                ? <ExamForm  isEdit={this.state.isEdit} onSet={this.onSet} id={this.state.idEdit}  />
                : ""
            }
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
