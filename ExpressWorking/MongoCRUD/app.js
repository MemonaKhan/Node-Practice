const express = require('express');
const app = express();
const mongoose = require('mongoose');

const Users = require('./model/users');
mongoose.connect('mongodb+srv://admin:NxZCUQCi1iG6wRTn@cluster0.xgemq.mongodb.net/testapi?retryWrites=true&w=majority',
    {
        UseNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const data = new Users({
    _id: new mongoose.Types.ObjectId(),
    name: 'Smith',
    email: 'smith@gmail.com',
    age: '25',
});

data.save().then((result) => { console.log('Data saved', result) }).catch(err => console.log('Error', err));