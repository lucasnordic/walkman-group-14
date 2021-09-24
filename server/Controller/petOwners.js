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
        if(result === null){
            res.status(404).send({message: "The petOwner_Id not found."});
            return;
        }
        res.json(result);
    })
    .catch ((err) => {
        res.status(200).send();
        return next(err);
    });
};

//(c) DELETE /petOwners
exports.deletePetOwners = (req, res, next) => {
    PetOwner.deleteMany({})
    .then((result) => {
        if(result === null){
            res.status(404).send({message: "The petOwner_Id not found."});
            return;
        }
        res.json(result);
    })
    .catch ((err) => {
        res.status(204).send();
        return next(err);
    });
};

//(d) GET /petOwners/:id
exports.getPetOwnersById = (req, res, next) => {
    PetOwner.findById(req.params.userId)
    .then((result) => {
        if(result === null){
            res.status(404).send({message: "The petOwner_Id not found."});
            return;
        }
        res.json(result);
    })
    .catch ((err) => {
        res.status(200).send();
        return next(err);
    });
};

//(e) PUT /petOwners/:id
exports.putPetOwnersById = (req, res, next) => {
    PetOwner.findByIdAndUpdate(req.params.userId, req.body, {new:true})
    .then((result) => {
        if(result === null){
            res.status(404).send({message: "The petOwner_Id not found."});
            return;
        }
        res.json(result);
    }).catch ((err) => {
        res.status(502).send();
        return next(err);
    });

};

//(f) PATCH /petOwners/:id
exports.patchPetOwnersById = ({body, params}, res, next) => {
    PetOwner.findById(params.userId)
    .then((result) => {
        if(result === null){
            res.status(404).send({message: "The petOwner_Id not found."});
            return;
        }
        if (body._pets){
            result._pets = [...body._pets, ...result._pets];
        }
        //result._id = body._id;
        result.userinfo.username = body.userinfo.username || result.userinfo.username; 
        result.userinfo.password = body.userinfo.password || result.userinfo.password; 
        result.userinfo.fullName = body.userinfo.fullName || result.userinfo.fullName; 
        if(body.userinfo.contactInfo){
            result.userinfo.contactInfo.email = body.userinfo.contactInfo.email || result.userinfo.contactInfo.email;
            result.userinfo.contactInfo.phoneNumber = body.userinfo.contactInfo.phoneNumber || result.userinfo.contactInfo.phoneNumber;
            result.userinfo.contactInfo.address = body.userinfo.contactInfo.address || result.userinfo.contactInfo.address;
        }

        result.save();

        console.log(result);
        res.json(result);
        
    }).catch ((err) => {
        res.status(502).send({message: "not found"});
        return next(err);
    });
};

//(g) DELETE /petOwners/:id
exports.deletePetOwnersById = (req, res, next) => {
    PetOwner.findByIdAndDelete(req.params.userId)
    .then((result) => {
        if(result === null){
            res.status(404).send({message: "The petOwner_Id not found."});
            return;
        }
        res.json(result);
    }).catch ((err) => {
        res.status(502).send();
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
    }).catch ((err) => {
        res.status(201).send();
        return next(err);
    });
};

//(b) GET /petOwners/:petOwner_id/pets
exports.getPetsByPetOwnerId = (req, res, next) => {
    PetOwner.findById(req.params.userId).populate('_pets')
    .then((result) => {
        res.json(result._pets);
    })
    .catch ((err) => {
        res.status(200).send();
        return next(err);
    });
};

//(c) GET /petOwners/:petOwner_id/pets/:pet_id
exports.getPetOwnersAndPetsById = (req, res, next) => {
    PetOwner.findById(req.params.userId)
    .populate('_pets')
    .then((result) => {
        Pet.findById(req.params.petId)
        .then ((result) => {
            res.json(result);
        }).catch ((err) => {
            res.status(200).send();
        return next(err);
        });
    }).catch ((err) => {
        res.status(200).send();
        return next(err);
    });
};

//(d) DELETE /petOwners/:petOwner_id/pets/:pet_id
exports.deletePetOwnersAndPetsbyId = (req, res, next) => {
    PetOwner.findByIdAndUpdate({_id : ObjectId(req.params.userId)}, {$pull : {_pets : ObjectId(req.params.petId)}}, {new : true})
    .populate('_pets')
    .then((result) => {
        Pet.findByIdAndDelete(req.params.petId)
        .then((result) => {
            res.json(result);
        })
    }).catch ((err) => {
        res.status(204).send();
        return next(err);
    });
};

/*------------------------------------------------------------
------------------------------------------------------------*/