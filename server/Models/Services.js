var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema({
    price: { type: Number, required: true },
    beauty:
    {
        brush: { type: Boolean },
        nailclips: { type: Boolean },
        washing: { type: Boolean },
    },
    veterinary:
    {
        examination: { type: Boolean },
        examinationSubject: { type: String },
        xRay: { type: Boolean },
    },
    hostel: { type: Boolean },
    walking:
    {
        location: { type: String },
        hours: { type: Number },
    },
});

module.exports = mongoose.model('services', serviceSchema);
