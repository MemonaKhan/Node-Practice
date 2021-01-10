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
app.delete('/user/:id',function(req,res){
    Users.deleteOne({_id:req.params.id}).then((result)=>{res.status(200).send('User Deleted')}).catch((err)=>{res.status(404).send('Error Occures')})
// res.status(200).json(result)
});

app.listen(8000);
// {"_id":{"$oid":"5ffb156b8fd4ab39e8f57ee7"},"name":"James","email":"james@gmail.com","age":"27","__v":{"$numberInt":"0"}}