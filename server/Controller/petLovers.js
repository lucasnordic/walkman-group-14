const express = require('express');
const { request } = require('../app');
const PetLover = require('../Models/PetLover');
const jwt = require('jsonwebtoken');

//(a) POST /petLovers
exports.postPetLovers = (req, res, next) => {
    const petLover = new PetLover(req.body);
    petLover.save((err, petLover) => {
        if (err) { return next(err); }
        res.status(201).json(petLover);
    });
};

//(b) GET /petLovers
exports.getPetLovers = (req, res, next) => {
    PetLover.find().sort({ username: -1 })
        .then((result) => {
            if (result === null) {
                res.status(404).send({ message: "The petLover_Id not found." });
                return;
            }
            res.json(result);
        })
        .catch((err) => {
            res.status(404).send();
            return next(err);
        });
};

//(c) DELETE /petLovers
exports.deletePetLovers = (req, res, next) => {
    PetLover.deleteMany({})
        .then((result) => {
            if (result === null) {
                res.status(404).send({ message: "The petLover_Id not found." });
                return;
            }
            res.json(result);
        })
        .catch((err) => {
            res.status(502).send();
            return next(err);
        });
};

//(d) GET /petLovers/:id
exports.getPetLoversById = (req, res, next) => {
    PetLover.findById(req.params.userId)
        .then((result) => {
            if (result === null) {
                res.status(404).send({ message: "The petLover_Id not found." });
                return;
            }
            res.json(result);
        })
        .catch((err) => {
            res.status(404).send();
            return next(err);
        });
};

//(e) PUT /petLovers/:id
exports.putPetLoversById = (req, res, next) => {
    PetLover.findByIdAndUpdate(req.params.userId, req.body, { new: true })
        .then((result) => {
            if (result === null) {
                res.status(404).send({ message: "The petLover_Id not found." });
                return;
            }
            res.json(result);
        }).catch((err) => {
            res.status(502).send();
            return next(err);
        });
};

//(f) PATCH /petLovers/:id
exports.patchPetLoversById = ({ body, params }, res, next) => {
    PetLover.findById(params.userId)
        .then((result) => {
            if (result === null) {
                res.status(404).send({ message: "The petLover_Id not found." });
                return;
            }
            if (body.availableHours) {
                result.availableHours = [...body.availableHours, ...result.availableHours];
            }
            if (body.acceptablePets) {
                result.acceptablePets = [...body.acceptablePets, ...result.acceptablePets];
            }
            if (body._services) {
                result._services = [...body._services, ...result._services];
            }
            //result._id = body._id;
            result.userinfo.username = body.userinfo.username || result.userinfo.username;
            result.userinfo.password = body.userinfo.password || result.userinfo.password;
            result.userinfo.fullName = body.userinfo.fullName || result.userinfo.fullName;
            if (body.userinfo.contactInfo) {
                result.userinfo.contactInfo.email = body.userinfo.contactInfo.email || result.userinfo.contactInfo.email;
                result.userinfo.contactInfo.phoneNumber = body.userinfo.contactInfo.phoneNumber || result.userinfo.contactInfo.phoneNumber;
                result.userinfo.contactInfo.address = body.userinfo.contactInfo.address || result.userinfo.contactInfo.address;
            }

            result.save();

            console.log(result);
            res.json(result);

        }).catch((err) => {
            res.status(502).send({ message: "Not found" });
            return next(err);
        });
};

//(g) DELETE /petLovers/:id
exports.deletePetLoversbyId = (req, res, next) => {
    PetLover.findByIdAndDelete(req.params.userId)
        .then((result) => {
            if (result === null) {
                res.status(404).send({ message: "The petLover_Id not found." });
                return;
            }
            res.json(result);
        }).catch((err) => {
            res.status(502).send();
            return next(err);
        });
};

// Login PetLover
exports.loginPetLover = (req, res, next) => {
    const username = req.body.username
    const password = req.body.password

    PetLover.findOne({ 'userinfo.username': username }, function (err, petLover) {
        if (err) {
            res.status(404).send({ message: "Server error" });
            return next(err);
        }
        if (petLover === null) {
            res.status(401).send({ message: "The user was not found" }); // we don't want hackers to know what they get wrong. So, same error
            return;
        }
        else if (petLover.userinfo.password != password) {
            res.status(401).send({ message: "The user was not found" }); // we don't want hackers to know what they get wrong. So, same error
            return;
        } else {
            let token = jwt.sign({ userId: petLover._id }, 'secretkey');
            return res.status(200).json({
                title: 'login sucess',
                token: token,
                userId: petLover._id
            })
        }
    })
}
