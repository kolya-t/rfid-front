import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { postUser as action } from '../../actions/usersActions';

class AddUserPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: '',
        lastName: '',
        cardNumber: '',
        rubInHour: 0,
        isAdmin: false
      }
    };
  }

  onChange = ({ target: { name, value } }) => {
    const { user } = this.state;
    this.setState({ user: { ...user, [name]: value } });
  };

  onSubmit = e => {
    const {
      props: { postUser },
      state: { user }
    } = this;
    e.preventDefault();
    postUser(user);
  };

  render() {
    const { state, props } = this;
    const { isLogged } = props;
    const { firstName, lastName, cardNumber, rubInHour, isAdmin } = state.user;

    if (!isLogged) {
      return <Redirect to="/" />;
    }

    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={this.onChange}
          placeholder="Имя"
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={this.onChange}
          placeholder="Фамилия"
        />
        <input
          type="text"
          name="cardNumber"
          value={cardNumber}
          onChange={this.onChange}
          placeholder="Номер карты"
        />
        <input
          type="number"
          name="rubInHour"
          value={rubInHour}
          onChange={this.onChange}
          placeholder="ЗП руб/час"
        />
        <input
          type="checkbox"
          name="isAdmin"
          value={isAdmin}
          onChange={this.onChange}
        />
        <button type="submit">Добавить</button>
      </form>
    );
  }
}

export default connect(
  state => ({
    isLogged: Object.entries(state.user).length !== 0
  }),
  dispatch => ({
    postUser: user => dispatch(action(user))
  })
)(AddUserPage);
