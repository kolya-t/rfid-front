import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getReport as action } from '../../actions/reportActions';

class ReportPage extends PureComponent {
  componentDidMount() {
    const { getReport } = this.props;
    getReport();
  }

  render() {
    const {
      isLogged,
      isLoaded,
      report: { startDate, endDate, payouts }
    } = this.props;

    if (!isLogged) {
      return <Redirect to="/" />;
    }

    if (!isLoaded) {
      return false;
    }

    const dates = Object.keys(payouts);

    return (
      <Fragment>
        <div>
          Отчет {startDate} - {endDate}:
        </div>
        <table>
          <thead>
            <tr>
              {dates.map(date => (
                <td key={date}>{date}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {dates.length > 0 &&
              Object.keys(payouts[dates[0]]).length > 0 &&
              Object.keys(payouts[dates[0]]).map(cardNumber => (
                <tr key={cardNumber}>
                  {dates.map(date => (
                    <td key={date}>{payouts[date][cardNumber]}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    isLogged: Object.entries(state.user).length !== 0,
    isLoaded: Object.entries(state.report).length !== 0,
    report: state.report
  }),
  dispatch => ({
    getReport: () => dispatch(action())
  })
)(ReportPage);
