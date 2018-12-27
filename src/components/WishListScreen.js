import React, { Component } from 'react';
import { ScrollView, View, Text, Linking } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-elements';
import { COLOR_MAIN } from '../constant/ColorCode';
import { actJobWishListClear } from '../actions';

class WishListScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <Button
        title="Reset"
        backgroundColor="rgba(0, 0, 0, 0)"
        color={COLOR_MAIN}
        onPress={navigation.getParam('resetWL')}
      />
    )
  })

  componentDidMount() {
    this.props.navigation.setParams({ resetWL: this.resetWishList.bind(this) });
  }

  resetWishList() {
    this.props.actJobWishListClear();
  }

  formatText(string) {
    if (string === null || string === undefined) {
      return string;
    }

    return (
      string.replace(/<\/?[a-z][a-z0-9]*>/g, '').replace(/<a/g, '')
    );
  }

  renderJobCard() {
    const newJobList = _.uniqBy([...this.props.jobList, ...this.props.recJobBEndList, ...this.props.recJobFEndList], 'id');

    return (
      _.map(newJobList, (job) => {
        if (this.props.wishList.includes(job.id)) {
          return (
            <Card title={job.title} key={job.id}>
              <Text>{job.company}</Text>
              <Text>{job.location}</Text>
              <Text>{this.formatText(job.company_url)}</Text>
              {/* <Text>{this.formatText(job.how_to_apply)}</Text> */}
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

const mapStateToProps = ({ reducerJob }) => {
  return { 
    jobList: reducerJob.jobList,
    wishList: reducerJob.wishList,
    recJobBEndList: reducerJob.recJobBEndList,
    recJobFEndList: reducerJob.recJobFEndList,
  };
};

export default connect(mapStateToProps, { actJobWishListClear })(WishListScreen);

// Slide to remove
// No Jobs added to wishlist