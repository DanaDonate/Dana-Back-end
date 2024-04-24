const { default: mongoose } = require("mongoose");

const donateSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    amount : {
        type : String,
        required : true
    },
    received : {
        type : Boolean,
        required : false,
        default : false
    },
    admin_view : {
        type : Boolean,
        default : false
    }
},{timestamps : true})

const donateModel = new mongoose.model('donate_user',donateSchema);

module.exports = donateModel;