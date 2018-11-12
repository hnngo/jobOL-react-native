import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import _ from 'lodash';
import { FontAwesome } from '@expo/vector-icons';
import { INPUT_BORDER_COLOR } from '../../constant/ColorCode';

class JobList extends Component {
  render() {
    return _.map(this.props.jobList, (job, index) => {
      return (
        <View key={index} style={styles.sectionStyle}>
          <View style={{ flexDirection: 'row' }}>
            <FontAwesome name={'image'} size={60} />
            <View style={styles.jobDetailStyle}>
              <Text style={{ fontSize: 20, fontWeight: '600'}}>
                {job.jobSlot}
              </Text>
              <Text>{job.cpnyName}</Text>
              <Text>{job.cpnyWebsite}</Text>
            </View>
            <View style={{ paddingRight: 5, flexDirection: 'row-reverse', flex: 1 }}>
              <FontAwesome name={'bookmark-o'} size={30} />
            </View>
          </View>
          <View style={{ paddingLeft: 20 }}>
            <Text>{job.jobStatus}</Text>
          </View>
        </View>
      );
    });
  }
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#fbecea',
    paddingTop: 10,
    paddingBottom: 10,
  },

  sectionStyle: {
    padding: 5,
    borderBottomColor: INPUT_BORDER_COLOR,
    borderBottomWidth: 1,
  },

  jobDetailStyle: {
    paddingLeft: 5,
  }
});

export default JobList;
