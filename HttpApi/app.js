// creating api with responding jason data


var http = require('http');
var data = [
    {name:'James', email:'james@test.com', age:20},
    {name:'Peter', email:'peter@test.com', age:22},
    {name:'John', email:'john@test.com', age:25},
    {name:'Smith', email:'smith@test.com', age:23},
];

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'application/json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(8000);
