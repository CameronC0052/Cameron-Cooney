var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://CamCluster:LU45BYaGOZuBFlxv@cluster0-jvvjt.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log("Successfully connected to database")})