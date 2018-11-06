import React from 'react';
import { View } from 'react-native';
import LoadingPage from './src/components/LoadingPage';
import LoginPage from './src/components/LoginPage';
import { InputLoginForm } from './src/components/common';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <LoginPage
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
  }
}
