import React, { Component } from 'react';
import { connect } from 'react-redux';
import JobList from './jobScreenStack/JobList';
import { actFetchJobList } from '../actions';

class JobScreen extends Component {
  componentWillMount() {
    this.props.actFetchJobList();
  }

  render() {
    return (
      <JobList {...this.props} />
    );
  }
}

export default connect(null, { actFetchJobList })(JobScreen);


// Job feeds
// Sample Job in java python
// Sample Job near you