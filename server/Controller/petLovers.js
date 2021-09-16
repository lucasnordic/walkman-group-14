var express = require('express');
var PetLover = require('../Models/PetLover');
var Service = require('../Models/Services');

// TODO (a) POST /petLovers
exports.postPetLover = (req, res, next) => {
    var petLover = new PetLover(req.body);
    petLover
        .save((err, petLover) => {
            if (err) { return next(err); }
            res.status(201).json(petLover);
        });
};

// (b) GET /petLovers
exports.getPetLovers = (req, res, next) => {
    PetLover.find(function (err, petLovers) {
        if (err) { return next(err); }
        res.json({ "petLovers": petLovers });
    });
}
// (c) DELETE /petLovers
exports.deletePetLovers = (req, res, next) => {

}
// (d) GET /petLovers/:id
exports.getPetLover = (req, res, next) => {

}
// (e) PUT /petLovers/:id
exports.putPetLover = (req, res, next) => {

}
// (f) PATCH /petLovers/:id
exports.patchPetLover = (req, res, next) => {

}
// (g) DELETE /petLovers/:id
exports.deletePetLover = (req, res, next) => {

}