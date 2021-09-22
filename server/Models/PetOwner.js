const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserInfo = require('./UserInfo');

const petOwnerSchema = new Schema({
    userinfo: { type: UserInfo, required: true },
    _pets: [{ type: mongoose.Types.ObjectId, ref: 'pets' }]
});

module.exports = mongoose.model('petOwners', petOwnerSchema);