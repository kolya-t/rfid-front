import { LOAD_USER_SUCCESS } from './actionTypes';
import userApi from '../api/userApi';

export const loadUserSuccess = user => ({ type: LOAD_USER_SUCCESS, user });

export const loadUser = cardNumber => dispatch =>
  userApi.getUser(cardNumber).then(user => dispatch(loadUserSuccess(user)));
