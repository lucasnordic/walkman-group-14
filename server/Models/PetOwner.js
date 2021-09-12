var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PetSchema = new Schema({
    name: { type: String, required: true},
    type: { type: String, required: true},
    gender: { type: String},
    allergies: [{ type : String}],
    foodPreferences: [{ type: String}],
    petItems: [{ type: String}]
});

var AddressSchema = new Schema({
    city: {type: String, required: true},
    streetName: {type: String, required: true},
    streetNum: {type: Number, required: true}
});

var petOwnerSchema = new Schema({
    username: { type: String, required: true, unique: true},
    password: {type: String, required: true},
    fullName: {type: String, required: true},
    address: {type: AddressSchema, required: true},
    Pets: [PetSchema]
});

module.exports = mongoose.model('petOwners', petOwnerSchema);