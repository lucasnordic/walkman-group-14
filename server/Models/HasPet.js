var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hasPetSchema = new Schema({
    ownerId: {type: mongoose.Schema.Types.ObjectId, required: true, unique: true},
    animalId: [{type: mongoose.Schema.Types.ObjectId, require: true}]
});

module.exports = mongoose.model('hasPets', hasPetSchema);