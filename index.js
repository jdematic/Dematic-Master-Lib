//Set of libraries functions to be used in projects
//Created by: JWL
//Date: 2022-12-30
//Last modified: 2023/01/02 00:31:40
//Version: 0.0.1

//import the date time functions
const dateTime = require("./dateTime");

//import the string manipulation functions
const stringManipulation = require("./StringManipulation");

//import the object manipulation functions
const objectTest = require("./objectTest");

//import the mysql functions
const mysql = require("./mysqlDB");

//export functions
module.exports = {
  dateTime: dateTime,
  stringManipulation: stringManipulation,
  objectTest: objectTest,
  mysql: mysql,

  version: "0.0.1",
};
