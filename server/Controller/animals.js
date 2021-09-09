var express = require('express');
var router = express.Router();
var Animal = require('../Models/Animal');

exports.postAnimal = (req, res, next) => {
    var animal = new Animal(req.body);
    animal.save(function (err, animal) {
        if (err) { return next(err); }
        res.status(201).json(animal);
    })
}
