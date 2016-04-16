var http = require('http');
var map = require('through2-map');
var server = http.createServer(function (req, res) {
   // request handling logic...
   if (req.method == 'POST') {

     req.pipe(map(function(entry){
       return entry.toString().toUpperCase();
     })).pipe(res);
   }
 })

 server.listen(process.argv[2]);
