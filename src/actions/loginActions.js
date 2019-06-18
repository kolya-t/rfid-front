import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './actionTypes';
import usersApi from '../api/userApi';

const loginSuccess = user => ({ type: LOGIN_SUCCESS, user });
const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });

export const login = cardNumber => dispatch =>
  usersApi.getUser(cardNumber).then(user => dispatch(loginSuccess(user)));
export const logout = () => dispatch => dispatch(logoutSuccess());
