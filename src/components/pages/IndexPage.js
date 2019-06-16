import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { login } from '../../actions/loginActions';

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardNumber: '',
      message: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async e => {
    const { cardNumber } = this.state;
    const { load } = this.props;

    e.preventDefault();
    load(cardNumber);
  };

  render() {
    const { cardNumber, message } = this.state;
    const { isLogged } = this.props;

    if (isLogged) {
      return <Redirect to="/user-list" />;
    }

    return (
      <form onSubmit={this.onSubmit}>
        <p>
          Введите номер вашей карточки или приложите ее к считывающему
          устройству
        </p>
        <input
          type="text"
          name="cardNumber"
          value={cardNumber}
          onChange={this.onChange}
        />
        <p>{message}</p>
      </form>
    );
  }
}

export default connect(
  state => ({
    isLogged: Object.entries(state.user).length !== 0
  }),
  dispatch => ({
    load: cardNumber => dispatch(login(cardNumber))
  })
)(IndexPage);
