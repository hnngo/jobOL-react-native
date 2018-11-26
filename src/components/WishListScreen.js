import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Card } from 'react-native-elements';

class WishListScreen extends Component {
  renderJobCard() {
    return (
      _.map(this.props.jobList, (job) => {
        if (this.props.wishList.includes(job.id)) {
          return (
            <Card title={job.title} key={job.id}>
              <Text>{job.company}</Text>
              <Text>{job.location}</Text>
              <Text>{job.company_url}</Text>
              <Text>{job.how_to_apply}</Text>
            </Card>
          );
        }
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