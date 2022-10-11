const _ = require('lodash');
const { Piece } = require('../models/piece');
const { Composer } = require('../models/composer');
const express = require('express');
const router = express.Router();

router.get('/:key', async (req, res) => {

    const reg = new RegExp(req.params.key, "i");
    let result = await Composer.find(
        {
            "$or": [
                { name: { $regex: reg } },
                { nationality: { $regex: reg } }
            ]
        }
    );

    result = result.concat(await Piece.find(
        {
            "$or": [
                { name: { $regex: reg } },
                { instruments: { $regex: reg } }
            ]
        }
    ));

    res.send(result);
});

router.get('/composer/:key', async (req, res) => {

    const reg = new RegExp(req.params.key, "i");
    let result = await Composer.find(
        {
            "$or": [
                { name: { $regex: reg } },
                { nationality: { $regex: reg } }
            ]
        }
    );

    res.send(result);
});

router.get('/piece/:key', async (req, res) => {

    const reg = new RegExp(req.params.key, "i");

    let result = await Piece.find(
        {
            "$or": [
                { name: { $regex: reg } },
                { year: { $regex: reg } },
                { instruments: { $regex: reg } }
            ]
        }
    );

    res.send(result);
});

module.exports = router; 