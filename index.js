//Set of libraries functions to be used in projects
//Created by: JWL
//Date: 2022-12-30
//Last modified: 2023/01/03 15:33:12
//Version: 0.0.1

//import the date time functions
const dateTime = require("./dateTime");

//import the string manipulation functions
const stringManipulation = require("./StringManipulation");

//import the object manipulation functions
const objectTest = require("./objectTest");

//import the mysql functions
const mysql = require("./mysqlDB");

//import the console functions
const console = require("./console");

//export functions
module.exports = {
  dateTime: dateTime,
  stringManipulation: stringManipulation,
  objectTest: objectTest,
  mysql: mysql,
  log: console.log,
  logDebug: console.logDebug,

  version: "0.0.2",
};
