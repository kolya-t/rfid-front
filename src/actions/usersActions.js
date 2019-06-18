import { GET_USERS_SUCCESS, POST_USER_SUCCESS } from './actionTypes';
import usersApi from '../api/userApi';

const getUsersSuccess = users => ({ type: GET_USERS_SUCCESS, users });
const postUserSuccess = () => ({ type: POST_USER_SUCCESS });

export const getUsers = () => (dispatch, getState) =>
  usersApi
    .getUsers(getState().user.cardNumber)
    .then(users => dispatch(getUsersSuccess(users)));

export const postUser = user => (dispatch, getState) =>
  usersApi
    .postUser(getState().user.cardNumber, user)
    .then(() => dispatch(postUserSuccess()));
