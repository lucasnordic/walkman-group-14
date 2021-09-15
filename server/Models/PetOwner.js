var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserInfo = require('./UserInfo');

var PetSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    gender: { type: String },
    allergies: [{ type: String }],
    foodPreferences: [{ type: String }],
    petItems: [{ type: String }]
});

var petOwnerSchema = new Schema({
    userinfo: { type: UserInfo, required: true },
    Pets: [PetSchema]
});

module.exports = mongoose.model('petOwners', petOwnerSchema);