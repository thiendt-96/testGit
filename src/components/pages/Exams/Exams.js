import React, { Component } from 'react';
import Header from '../../../commons/Header/index';
import MdContacts from '../../../../node_modules/react-ionicons/lib/MdContacts';
import MdAddCircle from '../../../../node_modules/react-ionicons/lib/MdAddCircle';
import ListExams from './ListExams';
import { connect } from 'react-redux';
import { reSet } from '../../../stores/actions';
import ExamForm from './ExamForm';

class Exams extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isadd: false
    }
  }
  handleClick = () => {
    this.setState({
      isadd: !this.state.isadd
    })

  }
  onSet = (value) => {
    this.setState({
      isadd: value
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
              <p className="content__title">Quản Lý Đề Thi</p>
            </div>

            <div className="add-new">
              <MdAddCircle fontSize="40px" color="#ff950e" onClick={this.handleClick} />
              <p className="add-new__text" >Thêm Mới</p>
              {
                this.state.isadd
                  ?
                  <ExamForm isadd={this.state.isadd} onSet={this.onSet} />
                  : null
              }
            </div>

          </div>
          <ListExams />
        </section>
      </div>
    )
  }
}

export default connect(null, {
  dispatchReset: () => reSet(),
})(Exams);
