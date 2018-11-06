import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Button } from 'react-native-elements';
import { InputLoginForm } from './common';

class LoginPage extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Image 
          source={require('../../img/logo/logo.png')}
          style={styles.logoStyle}
        />
        <InputLoginForm
          placeholder='username'
        />
        <InputLoginForm
          placeholder='password'
          secureTextEntry
        />
        <Button
          title='Sign In'
          borderRadius='15'
          color='#fff'
          backgroundColor='#c13725'
          
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#fbecea',
    alignItems: 'center',
  },

  logoStyle : {
    
  }
};

export default LoginPage;
