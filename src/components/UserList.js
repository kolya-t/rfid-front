import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const UserList = ({ user }) =>
  !user ? <Redirect to="/" /> : <div>UserList</div>;

export default connect(
  state => ({
    user: state.user
  }),
  undefined
)(UserList);