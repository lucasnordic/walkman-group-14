var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const addressSchema = new Schema({
   city: { type: String, required: true },
   streetName: { type: String, required: false },
   streetNum: { type: Number, required: false }
});

const contactInfoSchema = new Schema({
   email: { type: String, required: true },
   phoneNumber: { type: Number },
   address: { type: addressSchema, required: true }
});

const userInfoSchema = new Schema({
   username: { type: String, required: true, unique: true },
   password: { type: String, required: true },
   fullName: { type: String, required: true },
   contactInfo: { type: contactInfoSchema, required: true }
});

const UserInfo = mongoose.model('userinfos', userInfoSchema);
exports.UserInfo = UserInfo;