import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import LoadingScreen from './src/components/LoadingScreen';
import LoginScreen from './src/components/LoginScreen';
import rootreducer from './src/reducers';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({ loading: true });
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAAiVzb22bD3yeKNsFqwePB-h12lQGOgMs",
      authDomain: "jobol-4f5c2.firebaseapp.com",
      databaseURL: "https://jobol-4f5c2.firebaseio.com",
      projectId: "jobol-4f5c2",
      storageBucket: "jobol-4f5c2.appspot.com",
      messagingSenderId: "534138434969"
    });

    setTimeout(() => this.setState({ loading: false }), 3000);
  }

  render() {
    if (this.state.loading) {
      return <LoadingScreen />;
    }

    const store = createStore(rootreducer, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <View style={styles.containerStyle}>
          <LoginScreen />
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

// Using slide
// Using Bottom navigation
