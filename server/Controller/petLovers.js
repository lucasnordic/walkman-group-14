var express = require('express');
var router = express.Router();
var PetLover = require('../Models/PetLover');
var Service = require('../Models/Service');

// (a) POST /petLovers
exports.postPetLover = (req, res, next) => {
    var petLover = new PetLover(req.body);
    petLover.save(function (err, petLover) {
        if (err) { return next(err); }
        res.status(201).json(petLover);
    })
}

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



// (a) POST /petLovers/:petLoversId/services
exports.postPetLoverService = async (req, res, next) => {
    console.log(req.params); // debugging
    const service = new Service(req.body);
    await service.save();

    const petLoverId = req.params['petLoverId'];

    PetLover.findById(petLoverId, async function (err, petLover) {
        petLover.service_ids.push(service._id);
        await petLover.save();
        if (err) { return next(err); }
        res.json({ 'services': petLover });
    }) // .populate('_user')
};

// (b) GET /petLovers/:petLoversId/services
exports.getPetLoverServices = async (req, res, next) => {

};

// (c) GET /petLovers/:petLoversId/services/:services_id
exports.getPetLoverService = (req, res, next) => {

};
// (d) DELETE /petLovers/:petLoversId/services/:services_id
exports.deletePetLoverService = (req, res, next) => {

};