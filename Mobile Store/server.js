/*REFERENCE:
    https://evertpot.com/rest-embedding-hal-http2/
*/ 

// Models and Controllers are in the user folder for each collection.
var app = require('./app');
var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});