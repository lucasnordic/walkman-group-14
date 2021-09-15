var express = require('express');
var router = express.Router();
var PetOwner = require('../Models/PetOwner');

exports.postPetOwner = (req, res, next) => {
    var petOwner = new PetOwner(req.body);
    petOwner.save(function (err, petOwner) {
        if (err) { return next(err); }
        res.status(201).json(petOwner);
    })
};


exports.viewAll = (req, res, next) => {
    PetOwner.find()
    .then((result) => {
        res.json(result);
        res.send(result);
    })
    .catch ((err) => {
        return next(err);
    });
};

exports.viewUser = (req, res, next) => {
    PetOwner.findById(req.params.userId)
    .then((result) => {
        res.json(result);
        res.send(result);
    })
    .catch ((err) => {
        return next(err);
    });
};

exports.deleteAll = (req, res, next) => {
    PetOwner.deleteMany({})
    .then((result) => {
        res.json(result);
        res.send(result);
    })
    .catch ((err) => {
        return next(err);
    });
};

exports.savePet = (req, res, next) => {
    PetOwner.findOneAndUpdate(req.params.userId, {$push : {Pets: req.body}})
    .then((result) => {
        res.json(result);
        res.send(result);
    })
    .catch ((err) => {
        return next(err);
    });
};

exports.editPetOwner = (req, res, next) => {
    PetOwner.findByIdAndUpdate(req.params.userid, req.body, {new:true})
    .then((result) => {
        res.json(result);
        res.send(result);
    }).catch ((err) => {
        return next(err);
    });

};