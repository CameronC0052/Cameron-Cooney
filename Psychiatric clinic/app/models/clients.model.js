const mongoose = require('mongoose');

const clientsSchema = new mongoose.Schema({
    _id:String,
    title:String,
    fname:String,
    lname:String,
    email:String,
    mobile:String
})

module.exports = mongoose.model('clients', clientsSchema)