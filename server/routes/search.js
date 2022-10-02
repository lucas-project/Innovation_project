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

    result.concat(await Piece.find(
        {
            "$or": [
                { name: { $regex: reg } },
                { instruments: { $regex: reg } }
            ]
        }
    ));

    res.send(result);
});

module.exports = router; 