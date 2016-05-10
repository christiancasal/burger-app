var express = require('express');
var burger_router = express.Router();
var burger = ('./models/burger.js');
var bodyParser = require('body-parser');

burger_router.use(bodyParser.json());
burger_router.use(bodyParser.urlencoded({extended: true}));
burger_router.use(bodyParser.text());
burger_router.use(bodyParser.json({type:'application/vnd.api+json'}));

burger_router.get('/', function(req,res){
  res.redirect('/burger');
})

burger_router.get('/burger', function(req,res){
  burger.read( function(data){
    var hbsObj = {burger: data};
    console.log(hbsObj);
    res.render('index', hbsObj);
  });
});

burger_router.post('/burger/add', function(req, res){
  burger.insert(req.body.name, function(data){
    res.redirect('/burger');
  });
});
