//Set of libraries functions to be used in projects
//Created by: JWL
//Date: 2022-12-30
//Last modified: 2022/12/30 21:44:02
//Version: 0.0.1

//import the date time functions
const dateTime = require("./dateTime");

//import the string manipulation functions
const stringManipulation = require("./stringManipulation");

//import the object manipulation functions
const objectTest = require("./objectTest");

//export functions
module.exports = {
  dateTime: dateTime,
  stringManipulation: stringManipulation,
  objectTest: objectTest,

  version: "0.0.1",
};
