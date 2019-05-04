import {
  ACT_FETCH_JOB_LIST,
  ACT_FETCH_WISH_LIST,
  ACT_JOB_INPUT_KEYWORD,
  ACT_JOB_INPUT_LOCATION,
  ACT_FETCH_JOB_BACKEND,
  ACT_FETCH_JOB_FRONTEND,
  ACT_JOB_CLEAR_WISHLIST
} from '../constant/ActionConst';

const INITIAL_STATE = {
  jobList: {},
  wishList: [],
  inputKeyword: null,
  inputLocation: null,
  recJobBEndList: {},
  recJobFEndList: {},
};

export default (state = INITIAL_STATE, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case ACT_FETCH_JOB_LIST:
      return { ...state, jobList: action.payload, inputKeyword: null, inputLocation: null, };
    case ACT_FETCH_JOB_BACKEND:
      return { ...state, recJobBEndList: action.payload }
    case ACT_FETCH_JOB_FRONTEND:
      return { ...state, recJobFEndList: action.payload }
    case ACT_FETCH_WISH_LIST:
      if (action.payload === null) {
        // when wish list has not created yet, new account
        return { ...state };
      } else if (action.payload.constructor === Array) {
        // when wish list has already existed
        return { ...state, wishList: [ ...action.payload ] };
      }
    case ACT_JOB_INPUT_KEYWORD:
      return { ...state, inputKeyword: action.payload };
    case ACT_JOB_INPUT_LOCATION:
      return { ...state, inputLocation: action.payload };
    case ACT_JOB_CLEAR_WISHLIST:
      return { ...state, wishList: [] };
    default:
      return state;
  }
};
