import http from '../http';

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
      .catch(() => null);
}

export default UserApi;
