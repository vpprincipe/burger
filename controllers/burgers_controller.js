var express = require("express");
var router = express.Router();
var router = require("express").Router()
var burgerModel = require("../models/burgerModel")

router.get("/", function(req, res){
    burgerModel.all(function(displayData){
        res.json(displayData)

    })
})

module.exports = router;