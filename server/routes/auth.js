const bcrypt = require('bcrypt');
const { User, validate } = require('../models/user');
const express = require("express");
const router = express.Router();

router.post('/', async (req, res) => {
    let result ="Success";
    let token = "";
    const email = req.body.email;
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });

    if (!user) {
        result = "Invalid email";
        const sendback = {token,result};
        return res.status(400).send(sendback);
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!validPassword) {
        result = "Invalid password";
        const sendback = {token,result};
        return res.status(400).send(sendback);
    }

    token = user.generateAuthToken();
    const sendback = {token,result,email};

    res.send(sendback);
})




module.exports = router;