var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var petOwnerSchema = new Schema({
    username: { type: String, required: true, unique: true},
    password: {type: String, required: true},
    fullName: {type: String},
    petItems: [{ type: String}]
});

module.exports = mongoose.model('petOwners', petOwnerSchema);