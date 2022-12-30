//Set of string manipulation functions to be used in projects
//Created by: JWL
//Date: 2022-12-30
//Last modified: 2022/12/30 21:36:42
//Version: 0.0.1

//function to pad out text with leading characters
function padTextFront(text, padChar, padLength) {
  var textLength = text.length;
  var padLength = padLength - textLength;
  var padText = "";
  for (var i = 0; i < padLength; i++) {
    padText = padText + padChar;
  }
  return padText + text;
}
//function to pad out text with trailing characters
function padTextBack(text, padChar, padLength) {
  var textLength = text.length;
  var padLength = padLength - textLength;
  var padText = "";
  for (var i = 0; i < padLength; i++) {
    padText = padText + padChar;
  }
  return text + padText;
}

//function to pad out text with html spaces
function padTextHtmlSpacesFront(text, padLength) {
  var textLength = text.length;
  var padLength = padLength - textLength;
  var padText = "";
  for (var i = 0; i < padLength; i++) {
    padText = padText + "&nbsp;";
  }
  return padText + text;
}
//function to pad out text with html spaces
function padTextHtmlSpacesBack(text, padLength) {
  var textLength = text.length;
  var padLength = padLength - textLength;
  var padText = "";
  for (var i = 0; i < padLength; i++) {
    padText = padText + "&nbsp;";
  }
  return text + padText;
}

//export the functions
module.exports = {
  padTextFront: padTextFront,
  padTextBack: padTextBack,
  padTextHtmlSpacesFront: padTextHtmlSpacesFront,
  padTextHtmlSpacesBack: padTextHtmlSpacesBack,
};
