// import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function usersReducer(state = initialState.users, action) {
  switch (action.type) {
    //   case types.LOGIN_SUCCESS:
    //     return action.user;
    default:
      return state;
  }
}
