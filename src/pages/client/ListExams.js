import React, { Component } from 'react';
import ListExams from '../../components/pages/client/ListExams';
import { connect } from 'react-redux';
import { getAllExams } from '../../stores/actions';

class ListExamsContainer extends Component {
  componentDidMount() {
    this.props.dispathGetAllUser()
  }
  render() {
    const { exams } = this.props.exams
    return (
      <ListExams exams={exams} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    exams: state.examsReducer
  }
}

export default connect(mapStateToProps, {
  dispathGetAllUser: () => getAllExams()
})(ListExamsContainer);