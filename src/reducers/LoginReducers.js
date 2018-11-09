import {
  ACT_LOGIN_LOADING,
  ACT_LOGIN_SUCCESS,
  ACT_LOGIN_FAIL,
  ACT_LOGIN_INPUT_EMAIL,
  ACT_LOGIN_INPUT_PASSWORD,
  ACT_LOGIN_INPUT_CONFIRM_PASSWORD,
} from '../actions/type';

const INITIAL_STATE = {
  email: '',
  password: '',
  cfPassword: '',
  error: false,
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case ACT_LOGIN_INPUT_EMAIL:
      return { ...state, email: action.payload, error: false };
    case ACT_LOGIN_INPUT_PASSWORD:
      return { ...state, password: action.payload, error: false };
    case ACT_LOGIN_INPUT_CONFIRM_PASSWORD:
      const err = state.password === state.cfPassword ? false : 'Your Password and Confirmation Password do not match'
      return { ...state, cfPassword: action.payload, error: err };
    case ACT_LOGIN_LOADING:
      return { ...state, loading: true };
    case ACT_LOGIN_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    case ACT_LOGIN_FAIL:
      return { ...state, loading: false, error: 'Email or Password is invalid', password: '' };
    default:
      return state;
  }
}