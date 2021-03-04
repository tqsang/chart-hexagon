import moment from 'moment';

export function nextDate(date) {
  const DATE_FORMAT="MM/DD/YYYY";
  return moment(date, DATE_FORMAT).add(1, "days").format(DATE_FORMAT);
}

