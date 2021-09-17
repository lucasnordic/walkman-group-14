var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserInfo = require('./UserInfo');

var petOwnerSchema = new Schema({
    userinfo: { type: UserInfo, required: true },
    _pets: [{ type: mongoose.Types.ObjectId, ref: 'pets'}]
});

module.exports = mongoose.model('petOwners', petOwnerSchema);