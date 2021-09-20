const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserInfo = require('./UserInfo');

const petLoverSchema = new Schema({
    userinfo: { type: UserInfo, required: true },
    availableHours: [{ type: Number, required: true }],
    acceptablePets: [{ type: String }],
    _services: [{
        type: mongoose.Types.ObjectId,
        ref: 'services'
    }]
});

module.exports = mongoose.model('petLovers', petLoverSchema);