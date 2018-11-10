import {
  ACT_FETCH_JOB_LIST,
} from '../constant/ActionConst';

export default (state = {}, action) => {
  switch (action.type) {
    case ACT_FETCH_JOB_LIST:
      return action.payload;
    default:
      return state;
  }
};
