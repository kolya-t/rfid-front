import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getUsers as action } from '../../actions/usersActions';
import UsersTable from '../UsersTable';

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

    return <UsersTable users={users} />;
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
