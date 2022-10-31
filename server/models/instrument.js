const Joi = require('joi');
const mongoose = require('mongoose');

const Instrument = mongoose.model('Instrument', new mongoose.Schema({
    instrument: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255,
    },
    image: {
        type: String,
        minlength: 1,
        maxlength: 255,
    },
    introduction: {
        type: String,
        minlength: 2,
        maxlength: 1000,
    }
}));

function validateInstrument(instrument) {
    const schema = Joi.object({
        instrument: Joi.string().min(2).max(255).required(),
        image: Joi.string().min(2).max(255).required(),
        information: Joi.string().min(2).max(1000),
    });

    return schema.validate(instrument);
}

exports.Instrument = Instrument;
exports.validate = validateInstrument;