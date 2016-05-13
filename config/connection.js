var mysql = require('mysql');

var connection = mysql.createConnection({
  port: 3306,
  host: '',
  user: '',
  password: '',
  database: 'burgers_db'
});

connection.connect(function(err){
  if(err) throw err;
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
