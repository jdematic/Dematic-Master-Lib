//Set of date time functions to be used in projects
//Created by: JWL
//Date: 2022-12-30
//Last modified: 2022/12/30 21:35:28
//Version: 0.0.1

//function to get the current date
function getDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;
  return today;
}
//function to get the current time
function getTime() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  var time = hours + ":" + minutes + ":" + seconds;
  return time;
}
//function to get the current date and time
function getDateTime() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  var time = hours + ":" + minutes + ":" + seconds;
  today = mm + "/" + dd + "/" + yyyy + " " + time;
  return today;
}

//Rounds the timestamp to the nearest quarter hour
function roundTimeQuarterHour(time) {
  var timeToReturn = new Date(time);

  timeToReturn.setMilliseconds(Math.floor(timeToReturn.getMilliseconds() / 1000) * 1000);
  timeToReturn.setSeconds(Math.floor(timeToReturn.getSeconds() / 60) * 60);
  timeToReturn.setMinutes(Math.floor(timeToReturn.getMinutes() / 15) * 15);
  return timeToReturn;
}

function returnFormattedDate2(date) {
  if (date == null || date == "") {
    return "";
  }
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  let currentDate = new Date(date);

  let formatted_date =
    currentDate.getFullYear() +
    "-" +
    paddy(currentDate.getMonth() + 1, 2) +
    "-" +
    paddy(currentDate.getDate(), 2) +
    " " +
    paddy(currentDate.getHours(), 2) +
    ":" +
    paddy(currentDate.getMinutes(), 2) +
    ":" +
    paddy(currentDate.getSeconds(), 2);

  return formatted_date;
}

function returnFormattedDate3(date) {
  if (date == null || date == "") {
    return "";
  }
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  let currentDate = new Date(date);

  let formatted_date = currentDate.getFullYear() + "-" + paddy(currentDate.getMonth() + 1, 2) + "-" + paddy(currentDate.getDate(), 2);

  return formatted_date;
}

//export the functions
module.exports = {
  getDate: getDate,
  getTime: getTime,
  getDateTime: getDateTime,
  roundTimeQuarterHour: roundTimeQuarterHour,
  returnFormattedDate2: returnFormattedDate2,
  returnFormattedDate3: returnFormattedDate3,
};
