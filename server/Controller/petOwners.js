var express = require('express');
var router = express.Router();
var PetOwner = require('../Models/PetOwner');

exports.postPetOwner = (req, res, next) => {
    var petOwner = new PetOwner(req.body);
    petOwner.save(function (err, petOwner) {
        if (err) { return next(err); }
        res.status(201).json(petOwner);
    })
}
