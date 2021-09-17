var express = require('express');
var Service = require('../Models/Services');
var PetLover = require('../Models/PetLover');

/**
 * Service related
 */

// POST /petLovers/:petLoverid/services
exports.postServicesByPetLoverId = async (req, res, next) => {
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
        .catch((err, petLover) => {
            res.status(201).json(petLover);
            return next(err);
        });
};

// GET /petLovers/:petLoverId/services
exports.getServicesByPetLoverId = (req, res, next) => {
    const petLoverId = req.params['petLoverId'];

    PetLover
        .findById(petLoverId)
        .populate('_services')
        .then((result) => {
            console.log(result); // debugging
            res.json(result._services);
        })
        .catch((err, petLover) => {
            res.status(200).json(petLover);
            return next(err);
        });
};

// GET /petLovers/:petLoverId/services/:serviceId
exports.getServicesAndPetLoversById = (req, res, next) => {
    const petLoverId = req.params['petLoverId'];
    const serviceId = req.params['serviceId'];

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
        .catch((err, petLover) => {
            res.status(200).json(petLover);
            return next(err);
        });

};

//TODO:
// DELETE /petLovers/:petLoversId/services/:services_id
exports.deleteServicesAndPetLoversById = (req, res, next) => {

};