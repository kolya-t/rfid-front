import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import { getUsers as action } from '../../actions/usersActions';
import UsersTable from '../UsersTable';

class UserListPage extends PureComponent {
  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  render() {
    const { isLogged, isAdmin, users } = this.props;

    if (!isLogged) {
      return <Redirect to="/" />;
    }

    return (
      <Fragment>
        <UsersTable users={users} />
        {isAdmin && <Link to="/add-user">Добавить работника</Link>}
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    isLogged: Object.entries(state.user).length !== 0,
    isAdmin: state.user.isAdmin,
    users: state.users
  }),
  dispatch => ({
    getUsers: () => dispatch(action())
  })
)(UserListPage);
