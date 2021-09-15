var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Temporary
var serviceSchema = new Schema({
   name: { type: String, required: true }
});

module.exports = mongoose.model('services', serviceSchema);