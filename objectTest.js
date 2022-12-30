//Set of basic object test functions to be used in projects
//Created by: JWL
//Date: 2022-12-30
//Last modified: 2022/12/30 21:37:53
//Version: 0.0.1

//is value a number
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

//is value a integer
function isInteger(n) {
  return isNumber(n) && n % 1 === 0;
}

//is value a float
function isFloat(n) {
  return isNumber(n) && n % 1 !== 0;
}

//is value a string
function isString(n) {
  return typeof n === "string";
}

//is value a boolean
function isBoolean(n) {
  return typeof n === "boolean";
}

//is value a object
function isObject(n) {
  return typeof n === "object";
}

//is value a array
function isArray(n) {
  return Array.isArray(n);
}

//is value a function
function isFunction(n) {
  return typeof n === "function";
}

//is value a null
function isNull(n) {
  return n === null;
}

//is value a undefined
function isUndefined(n) {
  return typeof n === "undefined";
}

//is value a NaN
function isNaN(n) {
  return Number.isNaN(n);
}

//is value a Infinity
function isInfinity(n) {
  return n === Infinity;
}

//is value a -Infinity
function isNegativeInfinity(n) {
  return n === -Infinity;
}

//export the functions
module.exports = {
  isNumber: isNumber,
  isInteger: isInteger,
  isFloat: isFloat,
  isString: isString,
  isBoolean: isBoolean,
  isObject: isObject,
  isArray: isArray,
  isFunction: isFunction,
  isNull: isNull,
  isUndefined: isUndefined,
  isNaN: isNaN,
  isInfinity: isInfinity,
};
