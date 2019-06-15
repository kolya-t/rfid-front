import { combineReducers } from 'redux';
import users from './usersReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  users,
  user
});

export default rootReducer;
