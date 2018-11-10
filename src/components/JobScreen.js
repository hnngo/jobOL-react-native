import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class JobScreen extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>Job Screen !!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#fbecea',
  }
})
