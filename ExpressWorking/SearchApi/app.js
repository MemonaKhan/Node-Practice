const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bdParser = require('body-parser');
var jsonParser = bdParser.json();
const Users = require('./model/user');
mongoose.connect('mongodb+srv://admin:NxZCUQCi1iG6wRTn@cluster0.xgemq.mongodb.net/testapi?retryWrites=true&w=majority',
    {
        UseNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.get('/search/:name',function(req,res){
    var regex = new RegExp(req.params.name,'i');
    Users.find({name:regex}).then((result)=>{res.status(200).json(result)}).catch((err)=>{res.send('Error')})
})


app.listen(8000);