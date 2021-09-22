var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserInfo = require('./UserInfo');

var petLoverSchema = new Schema({
    userinfo: { type: UserInfo, required: true },
    availableHours: [{ type: String, required: true }],
    acceptablePets: [{ type: String }],
    _services: [{
        type: mongoose.Types.ObjectId,
        ref: 'Services'
    }]
});

module.exports = mongoose.model('petLovers', petLoverSchema);