var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hasPetSchema = new Schema({
    ownerId: {type: String, required: true, unique: true},
    animalId: [{type: String, require: true}]
});

module.exports = mongoose.model('hasPets', hasPetSchema);