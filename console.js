//Set of console functions to be used in projects
//Created by: JWL
//Date: 2022-12-30
//Last modified: 2023/01/04 13:59:16
//Version: 0.0.1

//log out a message to the console with a timestamp always
function log(message) {
  var date = new Date();
  var time = date.toLocaleTimeString();
  console.log(time + " - " + message);
}

//log out a message to the console with a timestamp only if the debug flag is set
function logDebug(message) {
  if (global.debugFlag) {
    var date = new Date();
    var time = date.toLocaleTimeString();
    console.log(time + " - " + message);
  }
}

//export the functions
module.exports = {
  log: log,
  logDebug: logDebug,
};
