import React, { Component } from 'react';
import { 
  View,
  ActivityIndicator,
  Image
} from 'react-native';

class LoadingPage extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Image 
          source={require('../../img/logo/logo.png')}
          style={styles.logoStyle}
        />
        <ActivityIndicator size='large' />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbecea',
  },

  logoStyle: {
    marginBottom: 40,
  }
}

export default LoadingPage;
