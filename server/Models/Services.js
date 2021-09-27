const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    price: { type: Number, required: true },
    beauty:
    {
        brush: { type: Boolean, required: true },
        nailclips: { type: Boolean, required: true },
        washing: { type: Boolean, required: true },
    },
    veterinary:
    {
        examination: { type: Boolean, required: true },
        examinationSubject: { type: String, required: true },
        xRay: { type: Boolean, required: true },
    },
    hostel: { type: Boolean, required: true },
    walking:
    {
        location: { type: String, required: true },
        hours: { type: Number, required: true },
    },
});

module.exports = mongoose.model('services', serviceSchema);
