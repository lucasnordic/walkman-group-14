var express = require('express');
var PetLover = require('../Models/PetLover');
var Service = require('../Models/Services');

// TODO: go through'em once again before front-end
//(a) POST /petLovers
exports.postPetLovers = (req, res, next) => {
    var petLover = new PetLover(req.body);
    petLover.save((err, petLover) => {
            if (err) { return next(err); }
            res.status(201).json(petLover);
        });
};

//(b) GET /petLovers
exports.getPetLovers = (req, res, next) => {
    PetLover.find().sort({username : -1})
    .then((result) => {
        res.json(result);
        res.send(result);
    })
    .catch ((err) => {
        return next(err);
    });
}
//(c) DELETE /petLovers
exports.deletePetLovers = (req, res, next) => {
    PetLover.deleteMany({})
    .then((result) => {
        res.json(result);
        res.send(result);
    })
    .catch ((err) => {
        return next(err);
    });
}
//(d) GET /petLovers/:id
exports.getPetLoversById = (req, res, next) => {
    PetLover.findById(req.params.userId)
    .then((result) => {
        res.json(result);
        res.send(result);
    })
    .catch ((err) => {
        return next(err);
    });
};

//(e) PUT /petLovers/:id
exports.putPetLoversById = (req, res, next) => {
    PetLover.findByIdAndUpdate(req.params.userId, req.body, {new:true})
    .then((result) => {
        res.json(result);
        res.send(result);
    }).catch ((err) => {
        return next(err);
    });
}
//(f) PATCH /petLovers/:id
exports.patchPetLoversById = (req, res, next) => {
    PetLover.findByIdAndUpdate(req.params.userId, req.body, {new:true})
    .then((result) => {
        res.json(result);
        res.send(result);
    }).catch ((err) => {
        return next(err);
    });
}
//(g) DELETE /petLovers/:id
exports.deletePetLoversbyId = (req, res, next) => {
    PetLover.findByIdAndDelete(req.params.userId)
    .then((result) => {
        res.json(result);
        res.send(result);
    }).catch ((err) => {
        return next(err);
    });
}

/*------------------------------------------------------------
------------------------------------------------------------*/