import React, { Component } from 'react';
import { 
  View,
  ActivityIndicator,
  Image
} from 'react-native';

import { COLOR_BG } from '../constant/ColorCode';

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
    backgroundColor: COLOR_BG,
  },

  logoStyle: {
    marginBottom: 40,
  }
}

export default LoadingPage;

// Using slides to visuallize the how to use app