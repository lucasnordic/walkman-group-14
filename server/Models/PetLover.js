var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserInfo = require('./UserInfo');

var petLoverSchema = new Schema({
    userinfo: { type: UserInfo, required: true },
    availableHours: [{ type: Number, required: true }],
    acceptablePets: [{ type: String }],
    service_ids: [{
        type: mongoose.Types.ObjectId,
        ref: 'services'
    }]
});

module.exports = mongoose.model('petLovers', petLoverSchema);