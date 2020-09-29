const mongoose = require('mongoose');

let MobileSchema = new mongoose.Schema({
    _id:String,
    Manufacturer:String,
    Model:String,
    Price:String
})
mongoose.model('Mobile', MobileSchema)
module.exports = mongoose.model('Mobile',MobileSchema)