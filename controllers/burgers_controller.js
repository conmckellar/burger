var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();

//create routes

router.get('/', function (req, res) {
  res.redirect('/index');
});


// render all burgers to the DOM
router.get('/index', function (req, res) {
  burger.selectAll(function(data) {
    var burgerAll = {
    	burgers: data
    };
    
    res.render('index', burgerAll);
  });
});


// create new burger
router.post('/burger/create', function (req, res) {
  burger.insertOne(["burger_name"], [req.body.burger_name], function(data) {

    res.redirect('/index');
  });
});


// devour burger
router.put('/burger/eat/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  burger.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect('/index');
  });
});


module.exports = router;