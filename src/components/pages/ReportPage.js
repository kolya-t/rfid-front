import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const ReportPage = ({ isLogged }) =>
  !isLogged ? <Redirect to="/" /> : <div>Report</div>;

export default connect(
  state => ({
    isLogged: Object.entries(state.user).length !== 0
  }),
  undefined
)(ReportPage);
