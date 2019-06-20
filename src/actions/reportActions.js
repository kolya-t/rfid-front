import moment from 'moment';

import { GET_REPORT_SUCCESS } from './actionTypes';
import reportApi from '../api/reportApi';

const getReportSuccess = report => ({ type: GET_REPORT_SUCCESS, report });

export const getReport = () => (dispatch, getState) => {
  const startDate = moment()
    .quarter(moment().quarter())
    .startOf('quarter')
    .format('DD.MM.YYYY');

  const endDate = moment()
    .quarter(moment().quarter())
    .endOf('quarter')
    .format('DD.MM.YYYY');

  return reportApi
    .getReport(getState().user.cardNumber, { startDate, endDate })
    .then(report => dispatch(getReportSuccess(report)));
};
