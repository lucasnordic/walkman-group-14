var express = require('express');
var router = express.Router();
var PetOwner = require('../Models/PetOwner');
var Pet = require('../Models/Pet');
var ObjectId = require('mongodb').ObjectID;

exports.postPetOwner = (req, res, next) => {
    var petOwner = new PetOwner(req.body);
    petOwner.save(function (err, petOwner) {
        if (err) { return next(err); }
        res.status(201).json(petOwner);
    })
};


exports.viewAll = (req, res, next) => {
    PetOwner.find()
    .then((result) => {
        res.json(result);
        res.send(result);
    })
    .catch ((err) => {
        return next(err);
    });
};

exports.viewUser = (req, res, next) => {
    PetOwner.findById(req.params.userId)
    .then((result) => {
        res.json(result);
        res.send(result);
    })
    .catch ((err) => {
        return next(err);
    });
};

exports.deleteAll = (req, res, next) => {
    PetOwner.deleteMany({})
    .then((result) => {
        res.json(result);
        res.send(result);
    })
    .catch ((err) => {
        return next(err);
    });
};

exports.editPetOwner = (req, res, next) => {
    PetOwner.findByIdAndUpdate(req.params.userId, req.body, {new:true})
    .then((result) => {
        res.json(result);
        res.send(result);
    }).catch ((err) => {
        return next(err);
    });

};

exports.dubbelEditPetOwner = (req, res, next) => {
    PetOwner.findByIdAndUpdate(req.params.userId, req.body, {new:true})
    .then((result) => {
        res.json(result);
        res.send(result);
    }).catch ((err) => {
        return next(err);
    });

};

exports.deletePetOwner = (req, res, next) => {
    PetOwner.findByIdAndDelete(req.params.userId)
    .then((result) => {
        res.json(result);
        res.send(result);
    }).catch ((err) => {
        return next(err);
    });

};

exports.savePet = (req, res, next) => {
    var newPet = new Pet(req.body);
    newPet.save();
    PetOwner.findByIdAndUpdate( {_id : ObjectId(req.params.userId)}, {$push : {_pets : newPet._id}}, {new : true})
    .populate('_pets')
    .then ((result) => {
        res.json(result);
        res.send(result);
    }).catch ((err) => {
        return next(err);
    });
};

exports.userGetPets = (req, res, next) => {
    PetOwner.findById(req.params.userId).populate('_pets')
    .then((result) => {
        res.json(result._pets);
        res.send(result._pets);
    })
    .catch ((err) => {
        return next(err);
    });
};

exports.getMyFavoritePet = (req, res, next) => {
    PetOwner.findById(req.params.userId).populate('_pets')
    .then((result) => {
        res.json(result.findById(req.params.petId));
        res.send(result.findById(req.params.petId));
    })
    .catch ((err) => {
        return next(err);
    });
};

/*
exports.deletePet = (req, res, next) => {
    PetOwner.findOneAndUpdate(req.params.userId, {Pets: {$pull: req.params.petId}}, {new: true})
    .then((result) => {
        res.json(result);
        res.send(result);
    })
    .catch ((err) => {
        return next(err);
    });
};


exports.deletePet = (req, res, next) => {
    PetOwner.findOneAndUpdate(req.params.userId, {$pull: {Pets: req.params.petId}}, {new: true})
    .then((result) => {
        res.json(result);
        res.send(result);
    })
    .catch ((err) => {
        return next(err);
    });
};


exports.deletePet = (req, res, next) => {

    for (i = 0; i < PetOwner.findById(req.params.userId).Pets.lenght; i++) {

        if(PetOwner.findById(req.params.userId).Pets[i]._id.toString() === req.params.petId) {

            PetOwner.findById(req.params.userId).Pets.splice(i, 1);

        }
    }

};


*/
