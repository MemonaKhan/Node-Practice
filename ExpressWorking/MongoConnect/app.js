// Password   NxZCUQCi1iG6wRTn
// Username   admin

//mongodb+srv://admin:<password>@cluster0.xgemq.mongodb.net/<dbname>?retryWrites=true&w=majority

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const users = require('./model/testapi');
// mongodb+srv://admin:<password>@cluster0.xgemq.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://admin:NxZCUQCi1iG6wRTn@cluster0.xgemq.mongodb.net/testapi?retryWrites=true&w=majority',
    {
        UseNewUrlParser: true,
        useUnifiedTopology: true
    }
);

users.find({},function(err,data){
    if(err){
        console.log('Error Occur');
    }
    
        console.log(data);
})