import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  Image,
  View,
  Text,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import { Button } from 'react-native-elements';
import { 
  actLogin,
  actInputEmail,
  actInputPassword,
} from '../actions';
import { InputLoginForm } from './common';


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };

    this.handlePressLogin = this.handlePressLogin.bind(this);
  }

  handlePressLogin(email, password) {
    this.props.actLogin({ email, password });
  }

  handleInputEmail(inputEmail) {
    this.props.actInputEmail(inputEmail);
  }

  handleInputPassword(inputPasswod) {
    this.props.actInputPassword(inputPasswod);
  }

  renderError() {
    if (this.props.error) {
      return (
        <Text style={styles.errorTextStyle}>
          Email or password is invalid!!
        </Text>
      );
    }
  }

  renderLoginButton() {
    if (this.props.loading) {
      return (
        <View>
          <ActivityIndicator 
            size='large'
            style={{ marginTop: 60 }}
          />
        </View>
      );
    }

    return (
      <View style={styles.groupButtonStyle}>
        <Button
            title='Sign In'
            containerViewStyle={styles.buttonStyle}
            borderRadius={20}
            color='#fff'
            backgroundColor='#c13725'
            onPress={() => this.handlePressLogin(this.state.email, this.state.password)}
        />
        <Button
            title='Create Account'
            containerViewStyle={styles.buttonStyle}
            borderRadius={20}
            color='#fff'
            backgroundColor='#c13725'
            onPress={() => {}}
        />
      </View>
    );
  }
  
  render() {
    return (
      <View style={styles.containerStyle}>
        <Image 
          source={require('../../img/logo/logo.png')}
          style={styles.logoStyle}
        />
        <InputLoginForm
          placeholder='email'
          onChangeText={(text) => this.handleInputEmail(text)}
          value={this.props.email}
          editable={!this.props.loading}
        />
        <InputLoginForm
          placeholder='password'
          secureTextEntry
          onChangeText={(text) => this.handleInputPassword(text)}
          value={this.props.password}
          editable={!this.props.loading}
        />
        {this.renderError()}
        {this.renderLoginButton()}
      </View>
    );
  }
}

LoginPage.defaultProps = { loading: false };

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: '#fbecea',
    alignItems: 'center',
  },

  groupButtonStyle: {
    marginTop: 20,
  },

  buttonStyle: {
    width: 220,
    marginTop: 10
  },

  logoStyle : {
    marginBottom: 60
  },

  errorTextStyle: {
    color: 'red',
    fontSize: 20,
    fontWeight: "300",
    marginTop: 10,
  }
});

const mapStateToProps = (state) => {
  const { email, password, loading, error } = state.redLogin;

  return { email, password, loading, error };
}

export default connect(mapStateToProps, {
  actLogin,
  actInputEmail,
  actInputPassword,
})(LoginPage);

// Create new account
// Forgot your password
// Facebook, Google Authentication
// Login as guest to watch