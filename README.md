
## Description
JobOL is an IOS application using react-native and expo cli. JobOL allow users search for his/her dream jobs quickly.

The application provides the job information based on search keyword and location. The job information is derived from [GIT HUB Api](https://jobs.github.com/api).

User account information and user's job wish lists are stored using Google Firebase API.

## Technologies/Libraries
The project is initiated by [Expo-cli](https://expo.io/tools).

[Google Firebase](https://firebase.google.com/) is used in the part of authentication and storing data in real-time databse. Both creating account or signing in account are processed by using Google Firebase API.

I used [Redux](https://redux.js.org/introduction/getting-started) as a state management for my project

For the Cross Platform React Native UI Toolkit, I used [React Native Elements](https://react-native-training.github.io/react-native-elements/).

## Dependencies
```
  "axios": "^0.18.0",
  "cities": "^2.0.0",
  "expo": "^31.0.2",
  "latlng-to-zip": "0.0.1",
  "lodash": "^4.17.11",
  "qs": "^6.5.2",
  "react": "16.5.0",
  "react-native": "https://github.com/expo/react-native/archive/sdk-31.0.0.tar.gz",
  "react-native-elements": "^0.19.1",
  "react-navigation": "^2.18.2",
  "react-redux": "^5.1.1",
  "redux": "^4.0.1",
  "redux-persist": "^5.10.0",
  "redux-thunk": "^2.3.0"
```
