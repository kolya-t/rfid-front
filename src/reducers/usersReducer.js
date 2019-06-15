// import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function usersReducer(state = initialState.users, action) {
  switch (action.type) {
    //   case types.LOAD_USER_SUCCESS:
    //     return action.user;
    default:
      return state;
  }
}
