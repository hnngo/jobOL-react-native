import firebase from 'firebase';
import { 
  ACT_LOGIN_LOADING,
  ACT_LOGIN_SUCCESS,
} from './type';

export const actLogin = ({ email, password }) => {
  return (dispatch) => {
    // Showing Activity Indicator
    dispatch({
      type: ACT_LOGIN_LOADING
    });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => dispatch({
        type: ACT_LOGIN_SUCCESS
      }))
      .catch(() => console.log('login fail'));
  }
};