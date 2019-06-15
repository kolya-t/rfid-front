import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Report = ({ user }) => (!user ? <Redirect to="/" /> : <div>Report</div>);

export default connect(
  state => ({
    user: state.user
  }),
  undefined
)(Report);
