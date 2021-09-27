const express = require('express');
const Service = require('../Models/Services');
const PetLover = require('../Models/PetLover');
const ObjectId = require('mongodb').ObjectID;

//(a) POST /petLovers/:petLoverid/services
exports.postServicesByPetLoverId = (req, res, next) => {

    const service = new Service(req.body);
    const petLoverId = req.params['petLoverId'];
    service.save();

    PetLover
        .findByIdAndUpdate(petLoverId, { $push: { _services: service._id } })
        .then((result) => {
            console.log(result); // debugging
            return result.save();

        }).then(() => {
            res.status(201).json(service)

        }).catch((err) => {
            res.status(502).send();
            return next(err);
        });
};

//(b) GET /petLovers/:petLoverId/services
exports.getServicesByPetLoverId = (req, res, next) => {
    const petLoverId = req.params['petLoverId'];

    PetLover
        .findById(petLoverId)
        .populate('_services')
        .then((result) => {
            if (result === null) {
                res.status(404).send({ message: "The services not found." });
                return;
            }
            console.log(result); // debugging
            res.json(result._services);
        })
        .catch((err) => {
            res.status(404).send({ message: "The services not found." });
            return next(err);
        });
};

//(c) GET /petLovers/:petLoverId/services/:serviceId
exports.getServiceByPetLoverById = (req, res, next) => {
    const petLoverId = req.params['petLoverId'];
    const serviceId = req.params['serviceId'];

    PetLover
        .findById(petLoverId)
        .populate('_services')
        .then((result) => {
            if (result === null) {
                res.status(404).send({ message: "The service_Id not found." });
                return;
            }
            const servicesArray = result._services;
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
            res.status(404).send({ message: "The service_Id not found." });
            return next(err);
        });
};

//(d) DELETE /petLovers/:petLoversId/services/:services_id
exports.deleteServiceByPetLoverId = (req, res, next) => {

    PetLover.findByIdAndUpdate({ _id: ObjectId(req.params.petLoverId) }, { $pull: { _services: ObjectId(req.params.serviceId) } }, { new: true })
        .populate('_services')
        .then((result) => {
            Service.findByIdAndDelete(req.params.serviceId)
                .then((result) => {
                    if (result === null) {
                        res.status(404).send({ message: "The service_Id not found." });
                        return;
                    }
                    res.json(result);
                })
        }).catch((err) => {
            res.status(502).send();
            return next(err);
        });
};