const Service = require('../Models/Services');
const PetLover = require('../Models/PetLover');

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
exports.getServicesAndPetLoversById = (req, res, next) => {
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

//TODO:
// DELETE /petLovers/:petLoversId/services/:services_id
exports.deleteServicesAndPetLoversById = (req, res, next) => {

};