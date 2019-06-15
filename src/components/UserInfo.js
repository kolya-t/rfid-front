import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const UserInfo = ({ user }) =>
  !user ? <Redirect to="/" /> : <div>UserInfo</div>;

export default connect(
  state => ({
    user: state.user
  }),
  undefined
)(UserInfo);
