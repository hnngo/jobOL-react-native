import { combineReducers } from 'redux';
import tempReducer from './reducerTemp';

export default combineReducers({
  temp: tempReducer
});