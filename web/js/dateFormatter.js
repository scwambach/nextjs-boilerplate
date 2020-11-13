const dateFormatter = (date, abrv) => {
  const fullMonths = [
    'January',
    'Februaury',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const current_datetime = new Date(date);
  let formatted_date = `${
    fullMonths[current_datetime.getMonth()]
  } ${current_datetime.getDate()}, ${current_datetime.getFullYear()}`;
  if (abrv) {
    formatted_date = `${
      months[current_datetime.getMonth()]
    } ${current_datetime.getDate()}, ${current_datetime.getFullYear()}`;
  }
  return formatted_date;
};

export default dateFormatter;
