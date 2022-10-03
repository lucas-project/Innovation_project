const Joi = require('joi');
const mongoose = require('mongoose');

const Composer = mongoose.model('Composer', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255,
    },
    date: {
        type: Number,
        minlength: 1,
        maxlength: 50,
    },
    nationality: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
    },
    website: {
        type: String,
        minlength: 2,
        maxlength: 255,
    },
    biography: {
        type: String,
        minlength: 2,
        maxlength: 10000,
    },
}));

function validateComposer(composer) {
    const schema = Joi.object({
        name: Joi.string().min(2).max(255).required(),
        date: Joi.number().min(1).max(50),
        nationality: Joi.string().min(2).max(50).required(),
        website: Joi.string().min(2).max(255),
        biography: Joi.string().min(2).max(10000),
    });

    return schema.validate(composer);
}

exports.Composer = Composer;
exports.validate = validateComposer;