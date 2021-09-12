var express = require('express');
var router = express.Router();

/*
var Animal = require('../Models/Animal');
var PetOwner = require('../Models/PetOwner');
*/
var HasPet = require('../Models/HasPet');

exports.postHasPet = (req, res, next) => {
    var hasPet = new HasPet(req.body);
    hasPet.save(function (err, hasPet) {
        if (err) { return next(err); }
        res.status(201).json(hasPet);
    })
};