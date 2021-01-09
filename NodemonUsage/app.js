
// using nodemon for working without restarting server and also using packages

var http = require('http');

http.createServer(function(req,res){
    console.log('got request');
    res.writeHead(200,{'Content-Type':'text/html'});
res.write('<h1>Yes Working now without restarting....</h1>');
res.end();
}).listen(8000);


// run by not using node app.js
// but run using nodemon app.js
// but I got problem by using it so I changed script in package.json file
// now run it through npm run server