var express = require('express');
var router = express.Router();
var User = require('../Models/User');


exports.postUser = (req, res, next) => {
    var user = new User(req.body);
    user.save(function (err, user) {
        if (err) { return next(err); }
        res.status(201).json(user);
    })
}


