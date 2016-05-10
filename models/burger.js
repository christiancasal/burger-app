var orm = require('./config/orm.js');

var burger_call = {
  insert: function(some_val, cb){
    orm.insert('burgers_tbl', 'burger_name', some_val, function(res){
      cb(res);
    });
  },
  read: function(cb){
    orm.read('*', function(res){
      cb(res);
    });
  },
  update: function(devoured_bool, user_burger, cb){
    orm.update('burger_tbl', 'devoured', devoured_bool, 'burger_name', user_burger, function(res){
      cb(res);
    });
  },
  delete: function(user_burger, cb){
    orm.delete('burger_tbl', 'burger_name', user_burger, function(res){
      cb(res);
    });
  }
}

module.exports = burger_call;
