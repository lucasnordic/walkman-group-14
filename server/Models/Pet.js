const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    gender: { type: String },
    allergies: [{ type: String }],
    foodPreferences: [{ type: String }],
    petItems: [{ type: String }]
});

module.exports = mongoose.model('pets', PetSchema);
