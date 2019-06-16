import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout as action } from '../actions/loginActions';

const Header = ({ isLogged, isAdmin, logout }) =>
  isLogged && (
    <div>
      <Link to="/user-list">Список работников</Link>
      {isAdmin && <Link to="/add-user">Добавить нового работника</Link>}
      <Link to="/report">Сгенерировать отчет</Link>
      <button type="button" onClick={logout}>
        Выход
      </button>
    </div>
  );

export default connect(
  state => ({
    isLogged: Object.entries(state.user).length !== 0,
    isAdmin: state.user.isAdmin
  }),
  dispatch => ({
    logout: () => dispatch(action())
  })
)(Header);
