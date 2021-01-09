const express = require('express');

const app = express();

app.get('/login',function(req,res){
    console.log(req.query);
    res.sendFile(__dirname+'/index.html');
    console.log(req.query);

});
// app.post('/login',function(req,res){
//     console.log(req.query);
//     // res.sendFile(__dirname+'/index.html');
// });
app.listen(8000);