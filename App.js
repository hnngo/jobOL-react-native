import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import LoadingPage from './src/components/LoadingPage';
import LoginPage from './src/components/LoginPage';
import rootreducer from './src/reducers';


export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAAiVzb22bD3yeKNsFqwePB-h12lQGOgMs",
      authDomain: "jobol-4f5c2.firebaseapp.com",
      databaseURL: "https://jobol-4f5c2.firebaseio.com",
      projectId: "jobol-4f5c2",
      storageBucket: "jobol-4f5c2.appspot.com",
      messagingSenderId: "534138434969"
    })
  }

  render() {
    const store = createStore(rootreducer, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <View style={styles.containerStyle}>
          <LoginPage
          />
        </View>
      </Provider>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
  }
}
