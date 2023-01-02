var mysql = require("mysql");
var Promise = require("bluebird");

//function to connect to the database
function connectToDB(host, user, password, database) {
  var connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
  });
  return connection;
}

//function to execute the query with parameters
function executeQuery(connection, query, parameters) {
  return new Promise(function (resolve, reject) {
    connection.query(query, parameters, function (err, rows, fields) {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
}
