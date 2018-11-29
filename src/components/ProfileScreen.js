import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

export default class ProfileScreen extends Component {
  render() {
    return (
      <View>
        <View style={styles.profileImageStyle}>
          <FontAwesome name="image" size={350}/>
        </View>
        <Text>Profile Screen !!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profileImageStyle: {
    alignItems: 'center'
  }
});
