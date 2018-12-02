import React, { Component } from 'react';
import { ScrollView, View, Text, Linking } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-elements';
import { COLOR_MAIN } from '../constant/ColorCode';

class WishListScreen extends Component {
  formatText(string) {
    if (string === null || string === undefined) {
      return string;
    }

    return (
      string.replace(/<\/?[a-z][a-z0-9]*>/g, '').replace(/<a/g, '')
    );
    
    // return (
    //   string.replace(/<p>/g, '').replace(/<\/p>/g, '')
    //         .replace(/<a>/g, '').replace(/<\/a>/g, '')
    //         .replace(/<b>/g, '').replace(/<\/b>/g, '')
    // );
  }

  renderJobCard() {
    return (
      _.map(this.props.jobList, (job) => {
        if (this.props.wishList.includes(job.id)) {
          return (
            <Card title={job.title} key={job.id}>
              <Text>{job.company}</Text>
              <Text>{job.location}</Text>
              <Text>{this.formatText(job.company_url)}</Text>
              <Text>{this.formatText(job.how_to_apply)}</Text>
              <Button
                title="Apply Now!!!"
                backgroundColor={COLOR_MAIN}
                onPress={() => Linking.openURL(job.url)}
              />
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