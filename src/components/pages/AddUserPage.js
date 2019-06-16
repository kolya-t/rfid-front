import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const AddUserPage = ({ user }) =>
  !user ? <Redirect to="/" /> : <div>AddUser</div>;

export default connect(
  state => ({
    user: state.user
  }),
  undefined
)(AddUserPage);
