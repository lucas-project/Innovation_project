const mongoose = require("mongoose");
const composerSchema = new mongoose.Schema({
    composerName:{
        type: String,
        required: true,
    },
    daysJoined:{
        type:String,
        required: false,
    },

},{
    timestamps:true,
});
const composer = mongoose.model("composerData",composerSchema)
module.exports = composer;