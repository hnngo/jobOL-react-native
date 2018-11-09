import firebase from 'firebase';
import { 
  ACT_LOGIN_LOADING,
  ACT_LOGIN_SUCCESS,
  ACT_LOGIN_FAIL,
  ACT_LOGIN_INPUT_EMAIL,
  ACT_LOGIN_INPUT_PASSWORD,
  ACT_LOGIN_INPUT_CONFIRM_PASSWORD,
} from './type';

export const actInputEmail = (email) => {
  return {
    type: ACT_LOGIN_INPUT_EMAIL,
    payload: email
  };
};

export const actInputPassword = (password) => {
  return {
    type: ACT_LOGIN_INPUT_PASSWORD,
    payload: password
  };
};

export const actInputConfirmPassword = (cfPassword) => {
  return {
    type: ACT_LOGIN_INPUT_CONFIRM_PASSWORD,
    payload: cfPassword
  };
};

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
      .catch(() => dispatch({
        type: ACT_LOGIN_FAIL
      }));
  }
};