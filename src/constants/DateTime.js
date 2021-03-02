import moment from 'moment';

export function nextDate(date) {
  const DATE_FORMAT="DD/MM/YYYY";
  return moment(date, DATE_FORMAT).add(1, "days").format(DATE_FORMAT);
}

