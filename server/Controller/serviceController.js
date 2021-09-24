var express = require('express');
var Service = require('../Models/Services');
var PetLover = require('../Models/PetLover');
var ObjectId = require('mongodb').ObjectID;
const Services = require('../Models/Services');

// POST /petLovers/:petLoverid/services
exports.postServicesByPetLoverId = async (req, res, next) => {
    const service = new Service(req.body);
    const petLoverId = req.params['petLoverId'];
    await service.save();

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

// GET /petLovers/:petLoverId/services
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

// GET /petLovers/:petLoverId/services/:serviceId
exports.getServicesAndPetLoversById = (req, res, next) => {
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
            res.status(404).send({ message: "The service_Id not found." });
            return next(err);
        });
};

//TODO:
// DELETE /petLovers/:petLoversId/services/:services_id
exports.deleteServicesAndPetLoversById = (req, res, next) => {

    PetLover.findByIdAndUpdate({_id : ObjectId(req.params.petLoverId)}, {$pull : {_services : ObjectId(req.params.serviceId)}}, {new : true})
    .populate('_services')
    .then((result) => {
        Services.findByIdAndDelete(req.params.serviceId)
        .then((result) => {
            if (result === null) {
                res.status(404).send({ message: "The service_Id not found." });
                return;
            }
            res.json(result);
        })
    }).catch ((err) => {
        res.status(204).send();
        return next(err);
    });



    // PetLover.findById(req.params.userId)
    //     .then((result) => {
    //         if (result != null) {
    //             var servicesArray = result._services;
    //             var service;
    //             console.log(result._services); // debugging
    //             for (let i = 0; i < result._services.length; i++) {
    //                 if (servicesArray[i]._id.toString() === serviceId.toString()) {
    //                     service = servicesArray[i];
    //                 };
    //             };
    //         }
    //         res.json(result);
    //     }).catch((err) => {
    //         res.status(502).send();
    //         return next(err);
    //     });


    // const petLoverId = req.params['petLoverId'];
    // const serviceId = req.params['serviceId'];

    // Service
    //     .findByIdAndDelete(serviceId)
    //     .populate('_services')
    //     .then((result) => {
    //         var servicesArray = result._services;
    //         var service;
    //         console.log(result._services); // debugging
    //         for (let i = 0; i < result._services.length; i++) {
    //             if (servicesArray[i]._id.toString() === serviceId.toString()) {
    //                 service = servicesArray[i];
    //             };
    //         };

    //         if (result === null) {
    //             res.status(404).send({ message: "The service_Id not found." });
    //             return;
    //         }
    //         res.json(service);
    //     })
    //     .catch((err) => {
    //         res.status(404).send({ message: "The service_Id not found." });
    //         return next(err);
    //     });

    // Deleting a specifik appointment for one patient 
    // router.delete('/api/patients/:patient_id/appointments/:appointment_id',  function(req, res, next){
    //     var appointment= Appointment.findById(req.params.appointment_id);
    //     appointment.remove({ 'patient': req.params.patient_id }, function (err, appointment) {
    //     if (!appointment) {
    //         return res.status(404).json({
    //             message: "There is no booking to delete"
    //         });
    //     }
    //     res.status(200).json({ 'appointment': appointment });
    // });
    // });

    // var service = Service.findById(req.params._id);
    // service.remove({ 'petLoverId': req.params.petLoverId }, function (err, service) {
    //     if (!service) {
    //         return res.status(404).json({
    //             message: "There is no service to delete"
    //         });
    //     }
    //     res.status(200).json({ 'service': service });
    // });

    // const petLoverId = req.params['petLoverId'];
    // const serviceId = req.params['serviceId'];

    // PetLover.findByIdAndRemove(serviceId)

    //     .then((result) => {
    //         if (result === null) {
    //             res.status(404).send({ message: "The service_Id not found." });
    //             return;
    //         }
    //         var servicesArray = result._services;
    //         var service;

    //         for (let i = 0; i < result._services.length; i++) {
    //             if (servicesArray[i]._id.toString() === serviceId.toString()) {
    //                 service = servicesArray[i];
    //             };
    //         };
    //         res.json(result);
    //     }).catch((err) => {
    //         res.status(502).send();
    //         return next(err);
    //     });

    // .then((result) => {
    //     if(result === null){
    //         res.status(404).send({message: "The service_Id not found."});
    //         return;
    //     }
    //     var servicesArray = result._services;
    //     var service;
    //     console.log(result._services); // debugging
    //     for (let i = 0; i < result._services.length; i++) {
    //         if (servicesArray[i]._id.toString() === serviceId.toString()) {
    //             service = servicesArray[i];
    //         };
    //     };

    //     res.json(service);
    // })
    // .catch((err) => {
    //     res.status(502).send();
    //     return next(err);
    // });



    // const service = new Service(req.body);
    // const petLoverId = req.params['petLoverId'];

    // Service.findByIdAndRemove({ _id: ObjectId(req.params.serviceId) })
    //     .then((result) => {
    //         res.status(200).json(result);
    //     })
    //     .catch((err) => {
    //         res.status(201).send();
    //         return next(err);
    //     });




};