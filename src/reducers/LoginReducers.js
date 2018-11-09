import {
  ACT_LOGIN_LOADING,
  ACT_LOGIN_SUCCESS,
  ACT_LOGIN_FAIL,
  ACT_LOGIN_INPUT_EMAIL,
  ACT_LOGIN_INPUT_PASSWORD,
  ACT_LOGIN_INPUT_CONFIRM_PASSWORD,
  ACT_LOGIN_GOTO_CREATE,
  ACT_CREATE_LOADING,
  ACT_CREATE_BACK_TO_LOGIN,
  ACT_CREATE_SUCCESS,
  ACT_CREATE_FAIL,
} from '../actions/type';

import {
  ERR_LOGIN_CFPWD_NOT_MATCH,
  ERR_LOGIN_INVALID_EMAIL_PWD,
  ERR_CREATE_INVALID_EMAIL,
} from '../constant/ErrorCode';

const INITIAL_STATE = {
  email: '',
  password: '',
  cfPassword: '',
  error: null,
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    //--------------LOGIN----------------//
    case ACT_LOGIN_INPUT_EMAIL:
      return { ...state, email: action.payload, error: null };
    case ACT_LOGIN_INPUT_PASSWORD:
      if ((state.cfPassword !== '') && (action.payload !== state.cfPassword)) {
        return { ...state, password: action.payload, error: ERR_LOGIN_CFPWD_NOT_MATCH };
      }
      return { ...state, password: action.payload, error: null };
    case ACT_LOGIN_INPUT_CONFIRM_PASSWORD:
      const err = state.password === action.payload ? null : ERR_LOGIN_CFPWD_NOT_MATCH;
      return { ...state, cfPassword: action.payload, error: err };
    case ACT_LOGIN_LOADING:
      return { ...state, loading: true };
    case ACT_LOGIN_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    case ACT_LOGIN_FAIL:
      return { ...state, loading: false, error: ERR_LOGIN_INVALID_EMAIL_PWD, password: '' };
    case ACT_LOGIN_GOTO_CREATE:
      return { ...state, error: null };
    
    //--------------CREATE----------------//
    case ACT_CREATE_BACK_TO_LOGIN:
      return { ...state, error: null, cfPassword: '' }
    case ACT_CREATE_LOADING:
      return { ...state, loading: true };
    case ACT_CREATE_SUCCESS:
      return { ...state, ...INITIAL_STATE }
    case ACT_CREATE_FAIL:
      return { ...state, error: ERR_CREATE_INVALID_EMAIL, loading: false }
    //--------------DEFAULT---------------//
    default:
      return state;
  }
}