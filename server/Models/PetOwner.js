var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var petOwnerSchema = new Schema({
    username: { type: String, required: true, unique: true},
    petItems: [{ type: String}]
});

module.exports = mongoose.model('petOwners', petOwnerSchema);