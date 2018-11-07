import {
  ACT_LOGIN_LOADING,
  ACT_LOGIN_SUCCESS,
} from '../actions/type';

const INITIAL_STATE = {
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACT_LOGIN_LOADING:
      return { ...state, loading: true };
    case ACT_LOGIN_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
}