const mongoose = require('mongoose');

let MobileSchema = new mongoose.Schema({
    _id:String,
    email:String,
    items_purchased: Object
    
})
mongoose.model('orders', MobileSchema)
module.exports = mongoose.model('orders',MobileSchema)