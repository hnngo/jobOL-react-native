import React, { Component } from 'react';
import { 
  View, 
  Text, 
  ActivityIndicator
} from 'react-native';

class LoadingPage extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.textStyle}>[LOGO IMAGE]</Text>
        <Text style={styles.textStyle}>Loading</Text>
        <ActivityIndicator size='large' />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textStyle: {
    marginBottom: 20,
    fontSize: 30,
  }
}

export default LoadingPage;
