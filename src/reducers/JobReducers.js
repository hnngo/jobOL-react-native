import {
  ACT_FETCH_JOB_LIST,
  ACT_FETCH_WISH_LIST,
} from '../constant/ActionConst';

const INITIAL_STATE = {
  jobList: {},
  wishlist: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACT_FETCH_JOB_LIST:
      return { ...state, jobList: action.payload };
    case ACT_FETCH_WISH_LIST:
      if (action.payload === null) {
        return { ...state, wishlist: [] };
      } else if (action.payload.constructor === Array) {
        return { ...state, wishlist: [ ...action.payload ] };
      }
    default:
      return state;
  }
};
