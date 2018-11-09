import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  Image,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  LayoutAnimation,
  UIManager,
} from 'react-native';
import { Button } from 'react-native-elements';
import { 
  actLogin,
  actInputEmail,
  actInputPassword,
  actInputConfirmPassword,
  actCreateNewUser,
  actBackToLogin,
  actGotoCreate,
} from '../actions';
import { InputLoginForm } from './common';


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isNewAccount: false
    };

    this.handlePressLogin = this.handlePressLogin.bind(this);
  }

  componentWillUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

    LayoutAnimation.spring();
  }

  handlePressLogin() {
    // In state [Back To Login]
    if (this.state.isNewAccount) {
      this.setState({ isNewAccount: false })
      this.props.actBackToLogin();
    } else {
      // In state [Login]
      this.props.actLogin({ 
        email: this.props.email,
        password: this.props.password
      });
    }
  }

  handlePressCreate() {
    // Popup confirm password
    if (!this.state.isNewAccount) {
      this.setState({ isNewAccount: true });
      this.props.actGotoCreate();
    } else if (this.props.error === null) {
      // Dispatch create action
      this.props.actCreateNewUser({ email: this.props.email, password: this.props.password });
    } 
  }

  handleInputEmail(inputEmail) {
    this.props.actInputEmail(inputEmail);
  }

  handleInputPassword(inputPasswod) {
    this.props.actInputPassword(inputPasswod);
  }

  handleInputConfirmPassword(inputCFPasswod) {
    this.props.actInputConfirmPassword(inputCFPasswod);
  }

  renderError() {
    if (this.props.error !== null) {
      return (
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
      );
    }
  }

  renderConfirmPassword() {
    if (this.state.isNewAccount) {
      return (
        <InputLoginForm
          placeholder='confirm password'
          secureTextEntry
          onChangeText={(text) => this.handleInputConfirmPassword(text)}
          value={this.props.cfPassword}
          editable={!this.props.loading}
        />
      );
    }
  }

  renderButton() {
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
            title={this.state.isNewAccount ? 'Back To Login' : 'Login'}
            containerViewStyle={styles.buttonStyle}
            borderRadius={20}
            color='#fff'
            backgroundColor='#c13725'
            onPress={() => this.handlePressLogin()}
        />
        <Button
            title='Create Account'
            containerViewStyle={styles.buttonStyle}
            borderRadius={20}
            color='#fff'
            backgroundColor='#c13725'
            onPress={() => this.handlePressCreate()}
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
          placeholder='email@test.com'
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
        {this.renderConfirmPassword()}
        {this.renderError()}
        {this.renderButton()}
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
    fontSize: 18,
    fontWeight: "300",
    marginTop: 20,
  }
});

const mapStateToProps = (state) => {
  const { email, password, cfPassword, loading, error } = state.redLogin;

  return { email, password, cfPassword, loading, error };
}

export default connect(mapStateToProps, {
  actLogin,
  actInputEmail,
  actInputPassword,
  actInputConfirmPassword,
  actCreateNewUser,
  actBackToLogin,
  actGotoCreate,
})(LoginPage);

// Create new account
// Forgot your password
// Facebook, Google Authentication
// Login as guest to watch