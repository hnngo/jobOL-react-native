import { combineReducers } from 'redux';
import LoginReducers from './LoginReducers';
import JobReducers from './JobReducers';

export default combineReducers({
  reducerAuth: LoginReducers,
  reducerJob: JobReducers
});