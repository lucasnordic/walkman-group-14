var express = require('express');
var PetLover = require('../Models/PetLover');
var Service = require('../Models/Services');

// TODO 
//(a) POST /petLovers
exports.postPetLover = (req, res, next) => {
    var petLover = new PetLover(req.body);
    petLover.save((err, petLover) => {
            if (err) { return next(err); }
            res.status(201).json(petLover);
        });
};

//(b) GET /petLovers
exports.getPetLovers = (req, res, next) => {
    PetLover.find(function (err, petLovers) {
        if (err) { return next(err); }
        res.json({ "petLovers": petLovers });
        res.status(200).json(petLover);
    });
}
//(c) DELETE /petLovers
exports.deletePetLovers = (req, res, next) => {

}
//(d) GET /petLovers/:id
exports.getPetLover = (req, res, next) => {

}
//(e) PUT /petLovers/:id
exports.putPetLover = (req, res, next) => {

}
//(f) PATCH /petLovers/:id
exports.patchPetLover = (req, res, next) => {

}
//(g) DELETE /petLovers/:id
exports.deletePetLoverbyId = (req, res, next) => {
    PetOwner.findByIdAndDelete(req.params.userId)
    .then((result) => {
        res.json(result);
        res.send(result);
    }).catch ((err) => {
        return next(err);
    });
}



exports.postPetOwner = (req, res, next) => {
    var petOwner = new PetOwner(req.body);
    petOwner.save(function (err, petOwner) {
        if (err) { return next(err); }
        res.status(201).json(petOwner);
    })
};

exports.viewAll = (req, res, next) => {
    PetOwner.find().sort({username : -1})
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