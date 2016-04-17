var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
  var out = new Object();
  var parsedurl = url.parse(req.url, true)
  var date = new Date(parsedurl.query.iso);

  if ( parsedurl.pathname == '/api/parsetime') {
    out.hour = date.getHours();
    out.minute = date.getMinutes();
    out.second = date.getSeconds()
    res.setHeader('Content-Type', 'application/json');

  } else if ( parsedurl.pathname == '/api/unixtime' ) {
    out.unixtime = date.getTime();
    res.setHeader('Content-Type', 'application/json');
  }
  res.end(JSON.stringify(out));
})

server.listen(process.argv[2]);

// Official answer:
// var http = require('http')
// var url = require('url')
//
// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }
//
// function unixtime (time) {
//   return { unixtime : time.getTime() }
// }
//
// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result
//
//   if (/^\/api\/parsetime/.test(req.url))
//     result = parsetime(time)
//   else if (/^\/api\/unixtime/.test(req.url))
//     result = unixtime(time)
//
//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))
