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


app.listen(8000);