import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import { InputLoginForm } from './common';
import { actLogin } from '../actions';


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };

    this.handlePressLogin = this.handlePressLogin.bind(this);
  }

  handlePressLogin(email, password) {
    this.props.actLogin({ email, password });
  }

  renderLoginButton() {
    if (this.props.loading) {
      return (
        <View>
          <ActivityIndicator 
            size='large'
            style={{ marginTop: 30 }}
          />
        </View>
      );
    }

    return (
      <Button
          title='Sign In'
          containerViewStyle={styles.buttonStyle}
          borderRadius={20}
          color='#fff'
          backgroundColor='#c13725'
          onPress={() => this.handlePressLogin(this.state.email, this.state.password)}
      />
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
          onChangeText={(text) => this.setState({ email: text })}
          value={this.state.email}
          editable={!this.props.loading}
        />
        <InputLoginForm
          placeholder='password'
          secureTextEntry
          onChangeText={(text) => this.setState({ password: text })}
          value={this.state.password}
          editable={!this.props.loading}
        />
        {this.renderLoginButton()}
      </View>
    );
  }
}

LoginPage.defaultProps = { loading: false };

const styles = {
  containerStyle: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: '#fbecea',
    alignItems: 'center',
  },

  buttonStyle: {
    width: 220,
    marginTop: 30
  },

  logoStyle : {
    marginBottom: 60
  }
};

const mapStateToProps = (state) => {
  const { loading } = state.redLogin;

  return { loading };
}

export default connect(mapStateToProps, { actLogin })(LoginPage);

// Create new account
// Forgot your password
// Facebook, Google Authentication
// Login as guest to watch