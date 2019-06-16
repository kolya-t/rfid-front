import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getUsers as action } from '../../actions/usersActions';

class UserListPage extends PureComponent {
  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  render() {
    const { isLogged, users } = this.props;

    if (!isLogged) {
      return <Redirect to="/" />;
    }

    return (
      <Fragment>
        {users.length > 0 && (
          <table>
            <thead>
              <tr>
                <td>ID</td>
                <td>Номер карточки</td>
                <td>Имя</td>
                <td>Фамилия</td>
                <td>ЗП/час</td>
                <td>Администратор</td>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.cardNumber}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.rubInHour}</td>
                  <td>{user.isAdmin ? 'Да' : 'Нет'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    isLogged: !!state.user,
    users: state.users
  }),
  dispatch => ({
    getUsers: () => dispatch(action())
  })
)(UserListPage);
