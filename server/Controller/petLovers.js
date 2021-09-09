var express = require('express');
var router = express.Router();
var PetLover = require('../Models/PetLover');

exports.postPetLover = (req, res, next) => {
    var petLover = new PetLover(req.body);
    petLover.save(function (err, petLover) {
        if (err) { return next(err); }
        res.status(201).json(petLover);
    })
}
