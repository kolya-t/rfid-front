import React from 'react';
import { connect } from 'react-redux';

import { logout as action } from '../actions/loginActions';

const Header = ({ isLogged, logout }) =>
  isLogged && (
    <div>
      <button type="button" onClick={logout}>
        Выход
      </button>
    </div>
  );

export default connect(
  state => ({
    isLogged: Object.entries(state.user).length !== 0
  }),
  dispatch => ({
    logout: () => dispatch(action())
  })
)(Header);
