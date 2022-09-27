const mongoose = require("mongoose");
const composerSchema = new mongoose.Schema({
    composerName:{
        type: String,
        required: true,
    },
    daysSinceJoined:{
        type:Number,
        required: true,
    },
});
const composer = mongoose.model("composerData",composerSchema)
module.exports = composer;