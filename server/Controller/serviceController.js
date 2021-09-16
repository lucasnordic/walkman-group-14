var express = require('express');
var router = express.Router();
var Service = require('../Models/Services');


exports.postService = (req, res, next) => {
    var service = new Service(req.body);
    service.save(function (err, service) {
        if (err) { return next(err); }
        res.status(201).json(service);
    })
}
