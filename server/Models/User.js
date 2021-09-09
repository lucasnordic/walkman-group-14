var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
    userName: { type: String, unique: true},
    color: { type: String },
    position: { type: Number },
});

module.exports = mongoose.model('users', user);
