import { GET_USERS_SUCCESS } from './actionTypes';
import usersApi from '../api/userApi';

export const getUsersSuccess = users => ({ type: GET_USERS_SUCCESS, users });

export const getUsers = () => (dispatch, getState) =>
  usersApi
    .getUsers(getState().user.cardNumber)
    .then(users => dispatch(getUsersSuccess(users)));
