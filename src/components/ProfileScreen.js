import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <View>
          <Ionicons name="ios-people" size={250}/>
        </View>
        <Text>Profile Screen !!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center'
  }
});
