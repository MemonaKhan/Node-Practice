const express = require('express');
const app = express();
const router = express.Router();

const middleware = require('./middleware');

app.get('/',function(req,res){
    // res.send('It is Home')
    res.sendFile(__dirname+'/Home.html')   // sending Data from html file
}); 

router.get('/login',middleware,function(req,res){
    res.send('It is Login')
});

app.get('/about',function(req,res){
    res.send('It is About')
});

app.use('/',router);
app.listen(8000);