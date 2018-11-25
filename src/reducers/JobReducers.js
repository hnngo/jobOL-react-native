import {
  ACT_FETCH_JOB_LIST,
  ACT_FETCH_WISH_LIST,
} from '../constant/ActionConst';

const INITIAL_STATE = {
  jobList: {},
  wishList: []
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ACT_FETCH_JOB_LIST:
      return { ...state, jobList: action.payload };
    case ACT_FETCH_WISH_LIST:
      if (action.payload === null) {
        // when wish list has not created yet, new account
        return { ...state };
      } else if (action.payload.constructor === Array) {
        // when wish list has already existed
        return { ...state, wishList: [ ...action.payload ] };
      }
    default:
      return state;
  }
};
