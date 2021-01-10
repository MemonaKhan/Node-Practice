const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bdParser = require('body-parser');
var jsonParser = bdParser.json();
const Users = require('./model/users');
mongoose.connect('mongodb+srv://admin:NxZCUQCi1iG6wRTn@cluster0.xgemq.mongodb.net/testapi?retryWrites=true&w=majority',
    {
        UseNewUrlParser: true,
        useUnifiedTopology: true
    }
);
app.post('/user',jsonParser,function(req,res){
    const data = new Users({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
    });
    data.save().then((result) => { res.send('Data saved') }).catch(err => res.send('Error'));
    // res.send(req.body.name);
});

app.listen(8000);