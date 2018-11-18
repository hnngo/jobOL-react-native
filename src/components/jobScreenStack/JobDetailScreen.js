import React, { Component } from 'react';
import { View, Text } from 'react-native';

class JobDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('jobName', '')
    }
  }
  render() {
    return (
      <View>
        <Text>
          DETAIL JOB!!!!
        </Text>
      </View>
    );
  }
}

export default JobDetailScreen;