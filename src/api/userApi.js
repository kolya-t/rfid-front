import http from '../http';
import initialState from '../reducers/initialState';

class UserApi {
  static getUser = cardNumber =>
    http
      .get(`/users/${cardNumber}`, {
        auth: {
          username: cardNumber,
          password: cardNumber
        }
      })
      .then(response => response.data)
      .catch(() => initialState.user);

  static getUsers = cardNumber =>
    http
      .get('/users', {
        auth: {
          username: cardNumber,
          password: cardNumber
        }
      })
      .then(response => response.data)
      .catch(() => initialState.users);
}

export default UserApi;
