var express = require('express');
var Service = require('../Models/Services');
var PetLover = require('../Models/PetLover');

/**
 * Service related
 */

// POST /petLovers/:petLoversId/services
exports.postPetLoverService = async (req, res, next) => {
    const service = new Service(req.body);
    const petLoverId = req.params['petLoverId'];
    await service.save();

    PetLover
        .findByIdAndUpdate(petLoverId, { $push: { _services: service._id } })
        .populate('_services')
        .then((result) => {
            console.log(result); // debugging
            result.save();
            res.status(201).json(result);
        })
        .catch((err) => {
            return next(err);
        });
};

// GET /users/:userId/services
exports.getPetLoverServices = (req, res, next) => {
    const petLoverId = req.params['petLoverId'];

    PetLover
        .findById(petLoverId)
        .populate('_services')
        .then((result) => {
            console.log(result); // debugging
            res.json(result._services);
        })
        .catch((err) => {
            return next(err);
        });
};

// GET /users/:userId/services/:serviceId
exports.getPetLoverService = (req, res, next) => {
    const petLoverId = req.params['petLoverId'];
    const serviceId = req.params['serviceId'];
    var service;

    PetLover
        .findById(petLoverId)
        .populate('_services')
        .then((result) => {
            var servicesArray = result._services;
            var service;
            console.log(result._services); // debugging
            for (let i = 0; i < result._services.length; i++) {
                if (servicesArray[i]._id.toString() === serviceId.toString()) {
                    service = servicesArray[i];
                };
            };

            res.json(service);
        })
        .catch((err) => {
            return next(err);
        });

};
// DELETE /petLovers/:petLoversId/services/:services_id
exports.deletePetLoverService = (req, res, next) => {

};