import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const AddUserPage = ({ isLogged }) =>
  !isLogged ? <Redirect to="/" /> : <div>AddUser</div>;

export default connect(
  state => ({
    isLogged: Object.entries(state.user).length !== 0
  }),
  undefined
)(AddUserPage);
