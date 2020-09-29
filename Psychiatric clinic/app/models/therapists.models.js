const mongoose = require('mongoose');

const therapistsSchema = new mongoose.Schema({
    //_id:String,
    title:String,
    fname:String,
    lname:String,
    email:String,
    mobile:String
})

module.exports = mongoose.model('therapists', therapistsSchema)