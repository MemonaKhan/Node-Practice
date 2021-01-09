const express = require('express');

const app = express();

const bdparser = require('body-parser');
const urlenc = bdparser.urlencoded();

app.get('/login',function(req,res){
    // console.log(req.query);
    res.sendFile(__dirname+'/index.html');
    // console.log(req.query);

});
app.post('/login',urlenc,function(req,res){
    // console.log(req.body.email);
    console.log(req.body);
    res.send('You Logged in Successfully');
    // res.sendFile(__dirname+'/index.html');
});

// app.use('/',urlenc);
app.listen(8000);

