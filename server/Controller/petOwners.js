var express = require('express');
var router = express.Router();
var PetOwner = require('../Models/PetOwner');
var Pet = require('../Models/Pet');
var ObjectId = require('mongodb').ObjectID;

// TODO: go through'em once again before front-end
//(a) POST /petOwners
exports.postPetOwners = (req, res, next) => {
    var petOwner = new PetOwner(req.body);
    petOwner.save(function (err, petOwner) {
        if (err) { return next(err); }
        res.status(201).json(petOwner);
    })
};

//(b) GET /petOwners
exports.getPetOwners = (req, res, next) => {
    PetOwner.find().sort({username : -1})
    .then((result) => {
        res.json(result);
        res.send(result);
    })
    .catch ((err) => {
        return next(err);
    });
};

//(c) DELETE /petOwners
exports.deletePetOwners = (req, res, next) => {
    PetOwner.deleteMany({})
    .then((result) => {
        res.json(result);
        res.send(result);
    })
    .catch ((err) => {
        return next(err);
    });
};

//(d) GET /petOwners/:id
exports.getPetOwnersById = (req, res, next) => {
    PetOwner.findById(req.params.userId)
    .then((result) => {
        res.json(result);
        res.send(result);
    })
    .catch ((err) => {
        return next(err);
    });
};

//(e) PUT /petOwners/:id
exports.putPetOwnersById = (req, res, next) => {
    PetOwner.findByIdAndUpdate(req.params.userId, req.body, {new:true})
    .then((result) => {
        res.json(result);
        res.send(result);
    }).catch ((err) => {
        return next(err);
    });

};

//(f) PATCH /petOwners/:id
exports.patchPetOwnersById = (req, res, next) => {
    PetOwner.findByIdAndUpdate(req.params.userId, req.body, {new:true})
    .then((result) => {
        res.json(result);
        res.send(result);
    }).catch ((err) => {
        return next(err);
    });

};

//(g) DELETE /petOwners/:id
exports.deletePetOwnersById = (req, res, next) => {
    PetOwner.findByIdAndDelete(req.params.userId)
    .then((result) => {
        res.json(result);
        res.send(result);
    }).catch ((err) => {
        return next(err);
    });

};

/*------------------------------------------------------------
------------------------------------------------------------*/

//(a) POST /petOwners/:petOwner_id/pets
exports.postPetsByPetOwnerId = (req, res, next) => {
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

//(b) GET /petOwners/:petOwner_id/pets
exports.getPetsByPetOwnerId = (req, res, next) => {
    PetOwner.findById(req.params.userId).populate('_pets')
    .then((result) => {
        res.json(result._pets);
        res.send(result._pets);
    })
    .catch ((err) => {
        return next(err);
    });
};

//(c) GET /petOwners/:petOwner_id/pets/:pet_id
exports.getPetOwnersAndPetsById = (req, res, next) => {
    PetOwner.findById(req.params.userId).populate('_pets')
    .then((result) => {
        Pet.findById(req.params.petId)
        .then ((result) => {
            res.json(result);
        })
    }).catch ((err) => {
        return next(err);
    });
};

//(d) DELETE /petOwners/:petOwner_id/pets/:pet_id
exports.deletePetOwnersAndPetsbyId = (req, res, next) => {
    PetOwner.findByIdAndUpdate({_id : ObjectId(req.params.userId)}, {$pull : {_pets : ObjectId(req.params.petId)}}, {new : true}).populate('_pets')
    .then((result) => {
        Pet.findByIdAndDelete(req.params.petId)
        .then((result) => {
            res.json(result);
        })
    }).catch ((err) => {
        return next(err);
    });
};

/*------------------------------------------------------------
------------------------------------------------------------*/