const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
//const _ = require('lodash');
const { Instrument, validate } = require('../models/instrument');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    const instruments = await Instrument.find().sort('instrument');
    res.send(instruments);
});

router.post('/', [auth, admin], async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    //const recommend = new Recommend(_.pick(req.body, ['title', 'body','image']));
    const instrument = new Instrument({
        instrument: req.body.instrument,
        image: req.body.image,
        introduction: req.body.introduction
    });
    await instrument.save();

    res.send(instrument);
});

router.delete('/:id', [auth, admin], async (req, res) => {
    const instrument = await Instrument.findByIdAndRemove(req.params.id);

    if (!instrument) return res.status(404).send('The instrument with the given ID was not found.');

    res.send(instrument);
});


module.exports = router;