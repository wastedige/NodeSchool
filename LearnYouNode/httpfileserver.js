var fs = require('fs');
var http = require('http');
var server = http.createServer(function (req, res) {
   // request handling logic...
   var src = fs.createReadStream(process.argv[3]);
   src.pipe(res);
 })
 server.listen(process.argv[2]);
