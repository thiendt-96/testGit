import React, { Component } from 'react';
import ExamsComponent from '../../../components/pages/Exams/Exams';
import { getAllExams } from '../../../stores/actions';
import { connect } from 'react-redux';

class Exams extends Component {
  componentDidMount() {
    this.props.dispathGetAllExams();
  }


  render() {
    
    console.log(this.props.dispathGetAllExams);
    
    return (
      <ExamsComponent />
    );
  }
}

export default connect(
  null,
  {
    dispathGetAllExams: () => getAllExams()
  }
)(Exams);