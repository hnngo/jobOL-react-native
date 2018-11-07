import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Button } from 'react-native-elements';
import { InputLoginForm } from './common';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  }
  
  render() {
    console.log(this.state.username);
    console.log(this.state.password);
    return (
      <View style={styles.containerStyle}>
        <Image 
          source={require('../../img/logo/logo.png')}
          style={styles.logoStyle}
        />
        <InputLoginForm
          placeholder='username'
          onChangeText={(text) => this.setState({ username: text })}
          value={this.state.username}
        />
        <InputLoginForm
          placeholder='password'
          secureTextEntry
          onChangeText={(text) => this.setState({ password: text })}
          value={this.state.password}
        />
        <Button
          title='Sign In'
          borderRadius={15}
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

// Facebook, Google Authentication
// Login as guest to watch