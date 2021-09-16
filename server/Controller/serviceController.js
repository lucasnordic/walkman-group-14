var express = require('express');
var router = express.Router();
var Service = require('../Models/Services');
var PetLover = require('../Models/PetLover');

/*
// POST /petLovers/:petLoversId/services
exports.postPetLoverService = async (req, res, next) => {
    const service = new Service(req.body);
    const petLoverId = req.params['petLoverId'];
    await service.save();

    PetLover
        .findByIdAndUpdate(userId, { $push: { _services: service._id } })
        .populate('_services')
        .then((result) => {
            console.log(result); // debugging
            result.save();
            res.json(result);
        })
        .catch((err) => {
            return next(err);
        });
};

// GET /petLovers/:petLoversId/services
exports.getPetLoverServices = async (req, res, next) => {

};

// GET /petLovers/:petLoversId/services/:services_id
exports.getPetLoverService = (req, res, next) => {

};
// DELETE /petLovers/:petLoversId/services/:services_id
exports.deletePetLoverService = (req, res, next) => {

};
*/