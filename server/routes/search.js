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

<<<<<<< Updated upstream
    const reg = new RegExp(req.params.key, "i");
    let result = await Composer.find(
        {
            "$or": [
                { name: { $regex: reg } },
                { nationality: { $regex: reg } }
            ]
        }
    );
=======
router.get('/piece', async (req, res) => {

    const reg1 = new RegExp(req.query.key, "i");
    const reg2 = new RegExp(req.query.instrument, "i");
    const reg3 = new RegExp(req.query.publisher, "i");
    let result = "";

    if (!req.query.instrument && !req.query.publisher) {
        result = await Piece.find(
            {
                "$or": [
                    {name: {$regex: reg1}},
                    {instruments: {$regex: reg1}},
                    {publisher: {$regex: reg1}},
                    //{"composer.name": {$elemMatch: {$regex: reg1}}},
                ]
            }
        );
        result = result.concat(await Piece.aggregate([
                { $unwind : "$composer"},
                { $match :{"composer.name" :{ $regex:reg1} } },
        ]))

    }else if (!req.query.instrument) {
        result = await Piece.find(
            {
                "$and": [
                    { name: { $regex: reg1 } },
                    { publisher: { $regex: reg3 } },
                ]
            }
        );
    } else if (!req.query.publisher) {
        result = await Piece.find(
            {
                "$and": [
                    { name: { $regex: reg1 } },
                    { instruments: { $regex: reg2 } },
                ]
            }
        );
    } else {
        result = await Piece.find(
            {
                "$and": [
                    { name: { $regex: reg1 } },
                    { instruments: { $regex: reg2 } },
                    { publisher: { $regex: reg3 } },
                ]
            }
        );
    }
>>>>>>> Stashed changes

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