import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const UserInfoPage = ({ isLogged }) =>
  !isLogged ? <Redirect to="/" /> : <div>UserInfo</div>;

export default connect(
  state => ({
    isLogged: Object.entries(state.user).length !== 0
  }),
  undefined
)(UserInfoPage);
