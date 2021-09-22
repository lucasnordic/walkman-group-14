const Service = require('../Models/Services');
const PetLover = require('../Models/PetLover');
const ObjectId = require('mongodb').ObjectID;

/**
 * Service related
 */

// POST /petLovers/:petLoverid/services
exports.postServicesByPetLoverId = (req, res, next) => {
    const service = new Service(req.body);
    const petLoverId = req.params['petLoverId'];
    service.save();

    PetLover
        .findByIdAndUpdate(petLoverId, { $push: { _services: service._id } })
        .populate('_services')
        .then((result) => {
            console.log(result); // debugging
            result.save();
            res.status(201).json(result);
        })
        .catch((err) => {
            res.status(201).send();
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
        .catch((err) => {
            res.status(200).send();
            return next(err);
        });
};

// GET /petLovers/:petLoverId/services/:serviceId
exports.getServiceByPetLoverById = (req, res, next) => {
    const petLoverId = req.params['petLoverId'];
    const serviceId = req.params['serviceId'];

    PetLover
        .findById(petLoverId)
        .populate('_services')
        .then((result) => {
            const servicesArray = result._services;
            let service;
            console.log(result._services); // debugging
            for (let i = 0; i < result._services.length; i++) {
                if (servicesArray[i]._id.toString() === serviceId.toString()) {
                    service = servicesArray[i];
                };
            };

            res.json(service);
        })
        .catch((err) => {
            res.status(200).send();
            return next(err);
        });

};

// DELETE /petLovers/:petLoversId/services/:services_id
exports.deleteServiceByPetLoverId = (req, res, next) => {

    Service.findByIdAndRemove({ _id: ObjectId(req.params.serviceId) })  // 1. delete the service itself
        .then((result) => {
            if (result === null) { res.status(404).send(); };           // 1,5. service was not found, return 404
            console.log(result);
            return PetLover                                             // 2. then, delete the reference ObjectId from petlover
                .findByIdAndUpdate({ _id: ObjectId(req.params.petLoverId) }, { $pull: { _services: ObjectId(req.params.serviceId) } }, { new: true })
                .populate('_services')
        })
        .then((result) => {                                             // 3. send result. Returns the whole petlover
            console.log(result); // debugg
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(404).send();
            return next(err);
        });
};