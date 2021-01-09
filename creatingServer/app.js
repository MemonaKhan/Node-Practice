
// creating server and minimal api

var http = require('http');

http.createServer(function(req,res){
    console.log('got request');
    // res.writeHead()
res.write('Yes Working');
res.end();
}).listen(8000);