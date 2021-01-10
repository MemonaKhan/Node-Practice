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
app.put('/user/:id',jsonParser,function(req,res){
    Users.updateOne({
        _id:req.params.id},{$set:{name:req.body.name}
    }).then((result) => { 
        res.send('Data Updated') 
    }).catch(err => res.send('Error'));
    // res.status(200).json(result);
});

app.listen(8000);

// But First write some data in body->text-> in json format
// {"_id":{"$oid":"5ffb14fff4da891bf4afb0fe"},"name":"abc","email":"abc@gmail.com","age":"22","__v":{"$numberInt":"0"}}