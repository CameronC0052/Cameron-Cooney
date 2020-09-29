const mongoose = require('mongoose');

const sessionsSchema = new mongoose.Schema({
    _id:String,
    sessionnumber:String,
    clients:String,
    therapists:String,
    duration:String,
    type:String,
    issueflag:String,
    sessionnotes:String
})

module.exports = mongoose.model('sessions', sessionsSchema)