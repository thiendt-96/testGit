import React, { Component } from 'react';
import QuestionsComponent from '../../../components/pages/Questions/Questions';
import { getAllQuestions } from '../../../stores/actions';
import { connect } from 'react-redux';

class Questions extends Component {
  componentDidMount() {
    this.props.dispathGetAllQuestion();
  }

  render() {
    return (
      <QuestionsComponent />
    );
  }
}

export default connect(
  null,
  {
    dispathGetAllQuestion: () => getAllQuestions()
  }
)(Questions);