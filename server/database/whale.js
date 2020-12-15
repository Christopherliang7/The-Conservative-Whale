var mysql = require('mysql');

exports.dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'chris',
  database: 'Whales'
});

