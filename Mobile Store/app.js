var express = require('express');
var app = express();
var db = require('./connect');
var MobileController = require('./user/MobileController');
var customersController = require('./user/customersController');
var ordersController = require('./user/ordersController');

app.use('/Mobile', MobileController);
app.use('/customer', customersController);
app.use('/orders', ordersController);
module.exports = app;