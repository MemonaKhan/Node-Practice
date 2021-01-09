var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    fs.readFile('./index.html',function(err,data){
        if(err){
            console.log(err);
        }
        else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        }

        
    })
}).listen(8000);