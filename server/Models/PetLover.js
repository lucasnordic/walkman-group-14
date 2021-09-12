var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AddressSchema = new Schema({
    city: {type: String, required: true},
    streetName: {type: String, required: true},
    streetNum: {type: Number, required: true}
});


var petLoverSchema = new Schema({
    username: { type: String, required: true, unique: true},
    password: {type: String, required: true},
    fullName: {type: String, required: true},
    address: {type: AddressSchema, required: true},
    availableHours: [{ type: Number, required: true}],
    acceptablePets: [{ type: String}]
});

module.exports = mongoose.model('petLovers', petLoverSchema);