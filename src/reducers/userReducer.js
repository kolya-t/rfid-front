import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return action.user;
    case types.LOGOUT_SUCCESS:
      return initialState.user;
    default:
      return state;
  }
}
