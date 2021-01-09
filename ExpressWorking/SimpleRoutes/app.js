const express = require('express');

const app = express();

app.get('/login',function(req,res){
    res.send('login getting');
});
app.post('/login',function(req,res){
    res.send('login posting');
});
app.put('/login',function(req,res){
    res.send('login putting');
});
app.delete('/login',function(req,res){
    res.send('login deleting');
});
app.listen(8000);