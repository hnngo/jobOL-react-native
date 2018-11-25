import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Card } from 'react-native-elements';

class WishListScreen extends Component {
  renderJobCard() {
    return (
      _.map(this.props.jobList, (job, index) => {
        return (
          <Card title={job.jobSlot} key={job.id}>
            <Text>{job.cpnyName}</Text>
            <Text>{job.cpnyLocation}</Text>
            <Text>{job.cpnyWebsite}</Text>
            <Text>{job.jobJD}</Text>
          </Card>
        )
      })
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderJobCard()}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    jobList: state.reducerJob.jobList,
    wishList: state.reducerJob.wishList
  };
};

export default connect(mapStateToProps)(WishListScreen);

// Slide to remove