const mongoose = require('mongoose');

let customerSchema = new mongoose.Schema({
    _id:String,
    fname:String,
    lname:String,
    email:String,
    mobile:String
})
mongoose.model('customer', customerSchema)
module.exports = mongoose.model('customer',customerSchema)