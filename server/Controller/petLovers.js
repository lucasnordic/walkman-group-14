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
            res.json(result);
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