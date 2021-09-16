var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PetSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    gender: { type: String },
    allergies: [{ type: String }],
    foodPreferences: [{ type: String }],
    petItems: [{ type: String }]
});

module.exports = mongoose.model('pets', PetSchema);
