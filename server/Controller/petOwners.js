const express = require('express');
const jwt = require('jsonwebtoken');

const PetOwner = require('../Models/PetOwner');
const ObjectId = require('mongodb').ObjectID;
const Bcrypt = require('../utils/PasswordHandler')

// TODO: go through'em once again before front-end
//(a) POST /petOwners
exports.postPetOwners = (req, res, next) => {
    const petOwner = new PetOwner(req.body);
    const hashedPassword = Bcrypt.hashPassword(req.body.userinfo.password)

    hashedPassword
        .then((result) => {
            petOwner.userinfo.password = result
        })
        .catch((err) => {
            res.status(404).send(err)
            return next(err)
        })
        .then((result) => {
            petOwner.save(function (err, petOwner) {
                if (err) { return next(err); }
                res.status(201).json(petOwner);
            })
        })
};

//(b) GET /petOwners
exports.getPetOwners = (req, res, next) => {
    PetOwner.find().sort({ username: -1 })
        .then((result) => {
            if (result === null) {
                res.status(404).send({ message: "The petOwner_Id not found." });
                return;
            }
            res.json(result);
        })
        .catch((err) => {
            res.status(404).send();
            return next(err);
        });
};

//(c) DELETE /petOwners
exports.deletePetOwners = (req, res, next) => {
    PetOwner.deleteMany({})
        .then((result) => {
            if (result === null) {
                res.status(404).send({ message: "The petOwner_Id not found." });
                return;
            }
            res.json(result);
        })
        .catch((err) => {
            res.status(502).send();
            return next(err);
        });
};

//(d) GET /petOwners/:id
exports.getPetOwnersById = (req, res, next) => {
    PetOwner.findById(req.params.userId)
        .then((result) => {
            if (result === null) {
                res.status(404).send({ message: "The petOwner_Id not found." });
                return;
            }
            res.json(result);
        })
        .catch((err) => {
            res.status(404).send();
            return next(err);
        });
};

//(e) PUT /petOwners/:id
exports.putPetOwnersById = (req, res, next) => {
    PetOwner.findByIdAndUpdate(req.params.userId, req.body, { new: true })
        .then((result) => {
            if (result === null) {
                res.status(404).send({ message: "The petOwner_Id not found." });
                return;
            }
            res.json(result);
        }).catch((err) => {
            res.status(502).send();
            return next(err);
        });

};

//(f) PATCH /petOwners/:id
exports.patchPetOwnersById = async ({ body, params }, res, next) => {
    try {
        const result = await PetOwner.findById(params.userId)
        const modified = []

        if (result === null) {
            res.status(404).send({ message: "The petOwner_Id not found." });
            return;
        }
        if (body._pets) {
            modified.push('_pets')
            result._pets = [...body._pets, ...result._pets];
        }
        if (body.userinfo) {
            modified.push('userinfo')
            if (body.userinfo.username) { result.userinfo.username = body.userinfo.username }
            if (body.userinfo.fullName) { result.userinfo.fullName = body.userinfo.fullName }

            // if there is a new password, hash it.
            if (body.userinfo.password) {
                try {
                    const hashedPassword = await Bcrypt.hashPassword(body.userinfo.password)
                    result.userinfo.password = hashedPassword
                } catch (err) {
                    res.status(500).send(err)
                    next(err);
                }
            }

            if (body.userinfo.contactInfo) {
                modified.push('contactInfo')
                if (body.userinfo.contactInfo.email) { result.userinfo.contactInfo.email = body.userinfo.contactInfo.email }
                if (body.userinfo.contactInfo.phoneNumber) { result.userinfo.contactInfo.phoneNumber = body.userinfo.contactInfo.phoneNumber }
                if (body.userinfo.contactInfo.address) { result.userinfo.contactInfo.address = body.userinfo.contactInfo.address }
            }
        }

        // Go through each marked attribute and specify them as edited for mongoose
        modified.forEach(i => {
            result.markModified(i);
        });
        await result.save();
        res.json(result);

    } catch (err) {
        res.status(502).send({ message: "not found" });
        return next(err);
    }
};

//(g) DELETE /petOwners/:id
exports.deletePetOwnersById = (req, res, next) => {
    PetOwner.findByIdAndDelete(req.params.userId)
        .then((result) => {
            if (result === null) {
                res.status(404).send({ message: "The petOwner_Id not found." });
                return;
            }
            res.json(result);
        })
        .catch((err) => {
            res.status(502).send();
            return next(err);
        });
};

// Login PetOwner
exports.loginPetOwner = (req, res, next) => {
    const username = req.body.username
    const password = req.body.password

    PetOwner.findOne({ 'userinfo.username': username }, function (err, petOwner) {
        if (err) {
            res.status(404).send({ message: "Server error" });
            return next(err);
        }
        if (petOwner === null) {
            res.status(401).send({ message: "The user was not found" }); // we don't want hackers to know what they get wrong. So, same error
            return;
        }

        Bcrypt
            .comparePassword(password, petOwner.userinfo.password)
            .then((result) => {
                if (result) {
                    console.log('The user password was a match')
                    let token = jwt.sign({ userId: petOwner._id }, 'secretkey'); // TODO: secretkey should be more complex for security reasons
                    return res.status(200).json({
                        title: 'login success',
                        token: token,
                        userId: petOwner._id,
                        userType: 'petowner'
                    })
                } else {
                    res.status(401).send({ message: "The user was not found" }); // we don't want hackers to know what they get wrong. So, same error
                }
            })
            .catch((err) => {
                res.status(500).send(err)
            })
    })
}
