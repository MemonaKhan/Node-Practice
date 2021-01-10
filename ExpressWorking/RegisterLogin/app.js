const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bdParser = require('body-parser');
var jsonParser = bdParser.json();
const Users = require('./model/users');
const crypto = require('crypto');
var key = "password";
var algo = "aes256";
const jwt = require('jsonwebtoken');
var jwtkey = 'jwt';

mongoose.connect('mongodb+srv://admin:NxZCUQCi1iG6wRTn@cluster0.xgemq.mongodb.net/testapi?retryWrites=true&w=majority',
    {
        UseNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.post('/signup', jsonParser, function (req, res) {
    var cipher = crypto.createCipher(algo, key);
    var encrypted = cipher.update(req.body.pass, 'utf8', 'hex') + cipher.final('hex');
    const data = new Users({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        password: encrypted,
    });
    data.save().then((result) => {
        jwt.sign({ result }, jwtkey, { expiresIn: '300s' }, (err, token) => {
            res.status(201).json(token);
        })
        //  res.send('Data saved') 
    }).catch(err => res.send('Error'));
    // res.send(encrypted);
});

app.post('/login', jsonParser, function (req, res) {

    Users.findOne({
        email: req.body.email
    }).then((result) => {
        var decipher = crypto.createDecipher(algo, key);
        var decrypted = decipher.update(result.password, 'hex', 'utf8') + decipher.final('utf8');
        if (decrypted == req.body.pass) {
            jwt.sign({ result }, jwtkey, { expiresIn: '300s' }, (err, token) => {
                res.status(200).json(token);
            })
            // res.send(token);
        }
    }).catch((err) => res.send('Error'))
});

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    // const bearer = bearerHeader.split(' ')
    req.token = bearerHeader;
    
    if (typeof bearerHeader !== 'undefined') {
        // res.send(bearerHeader);
        jwt.verify(req.token, jwtkey, (err, data) => {
            if (err) {
                res.status(400).send('Error');
            }
            else {
                next();
            }
        })
    }
    else {
        res.send('Error from token')
    }
}

app.get('/users', verifyToken, function (req, res) {
    Users.find().then((result) => {
        res.status(201).json(result)
    }).catch((err) => {
        res.send('error')
    })
})

app.listen(8000);