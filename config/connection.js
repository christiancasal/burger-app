// var mysql = require('mysql');
//
// var connection = mysql.createConnection({
//   port: 3306,
//   host: 'localhost',
//   user: '',
//   password: '',
//   database: 'burgers_db'
// });
//
// connection.connect(function(err){
//   if(err) throw err;
//   console.log('connected as id ' + connection.threadId);
// });

var mysql = require('mysql');
var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
  });
}
connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;
//
//   console.log('The solution is: ', rows[0].solution);
// });
//
// connection.end();

module.exports = connection;
