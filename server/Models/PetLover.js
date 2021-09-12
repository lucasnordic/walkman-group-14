var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var petLoverSchema = new Schema({
    username: { type: String, required: true, unique: true},
    password: {type: String, required: true},
    fullName: {type: String},
    availableHours: [{ type: Number, required: true}],
    acceptablePets: [{ type: String}]
});

module.exports = mongoose.model('petLovers', petLoverSchema);