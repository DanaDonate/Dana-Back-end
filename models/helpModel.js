const { default: mongoose } = require("mongoose");


const helpSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    }
},{timestamps : true})

const helpModel = new mongoose.model('help',helpSchema);

module.exports = helpModel;