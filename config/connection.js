var mysql = require('mysql');

var connection = mysql.createConnection({
  port: 3306,
  host: 'tviw6wn55xwxejwj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'cgdorkkoctwknttz',
  password: 'k0g0f5707smo5bd1',
  database: 'burgers_db'
});

connection.connect(function(err){
  if(err) throw err;
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
