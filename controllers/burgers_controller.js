var express = require("express");
var router = express.Router();
var router = require("express").Router()
var burgerModel = require("../models/burger_Model")



router.get('/', function(req, res) {
  burgerModel.selectAll(function(data) {
      var hbsObject = {
        burgerModel: data
      };
      // console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });
  
  router.post('/burgers', function(req, res) {
    burgerModel.insertOne([
      'burger_name'
    ], [
      req.body.burger_name
    ], function(data) {
      res.redirect('/');
    });
  });
  
  router.put('/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
  
    burgerModel.updateOne({
      devoured: true
    }, condition, function(data) {
      res.redirect('/');
    });
  });

module.exports = router;