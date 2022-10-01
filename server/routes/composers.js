const _ = require('lodash');
const { Composer, validate } = require('../models/composer');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const composers = await Composer.find().sort('name');
    res.send(composers);
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const composer = new Composer(_.pick(req.body, ['name', 'date', 'nationality', 'website']));
    await composer.save();

    res.send(composer);
});

router.put('/:id', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const composer = await Composer.findByIdAndUpdate(req.params.id, _.pick(req.body, ['name', 'date', 'nationality', 'website']), { new: true });

    if (!composer) return res.status(404).send('The composer with the given ID was not found.');

    res.send(composer);
});

router.delete('/:id', async (req, res) => {
    const composer = await Composer.findByIdAndRemove(req.params.id);

    if (!composer) return res.status(404).send('The composer with the given ID was not found.');

    res.send(composer);
});

router.get('/:id', async (req, res) => {
    const composer = await Composer.findById(req.params.id);

    if (!composer) return res.status(404).send('The composer with the given ID was not found.');

    res.send(composer);
});

module.exports = router; 