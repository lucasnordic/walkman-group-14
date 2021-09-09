var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var animalSchema = new Schema({
    name: { type: String, required: true},
    type: { type: String, required: true},
    gender: { type: String},
    allergies: [{ type : String}],
    foodPreferences: [{ type: String}]
});

module.exports = mongoose.model('animals', animalSchema);