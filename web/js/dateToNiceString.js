//usage ex: alert(dateToNiceString(new Date()));
//returns this format: "Oct 23 2019 1:09pm"
export default function dateToNiceString(myDate, time) {
  var month = new Array();
  month[0] = 'Jan';
  month[1] = 'Feb';
  month[2] = 'Mar';
  month[3] = 'Apr';
  month[4] = 'May';
  month[5] = 'Jun';
  month[6] = 'Jul';
  month[7] = 'Aug';
  month[8] = 'Sep';
  month[9] = 'Oct';
  month[10] = 'Nov';
  month[11] = 'Dec';
  var hours = myDate.getHours();
  var minutes = myDate.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ampm;
  return `${
    month[myDate.getMonth()]
  } ${myDate.getDate()} ${myDate.getFullYear()}${time ? ` ${strTime}` : ''}`;
}
